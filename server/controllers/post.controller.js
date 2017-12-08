import Post from '../models/post';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */

var RtmClient = require('@slack/client').RtmClient;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;
var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
var bot_token = 'xoxb-284470865911-RDeyYFnMppEVIEWrCBd2B4A2';
var rtm = new RtmClient(bot_token);
var indico = require('indico.io');
indico.apiKey =  '5a0f61c144a48a19da1b0a6b2ee4d550';

var oMessageBody = {};

var oHistory = [{ anger: 0.0218894258,
  surprise: 0.4936410189,
  fear: 0.1421702206,
  sadness: 0.0626822487,
  joy: 0.27961710100000003 },
  { anger: 0.011043055900000001,
  surprise: 0.6042832136,
  fear: 0.1758940071,
  sadness: 0.0667467117,
  joy: 0.1420329958 },
  { anger: 0.0218894258,
  surprise: 0.4936410189,
  fear: 0.1421702206,
  sadness: 0.0626822487,
  joy: 0.27961710100000003 }];

var sampleCurrentEmotions = { anger: 0.0218894258,
                              surprise: 0.4936410189,
                              fear: 0.1421702206,
                              sadness: 0.0626822487,
                              joy: 0.27961710100000003 };

export var oEmotionBody = {
    "T8BCLHPEG" : [{
      "C8ARLGM33" : {
        "currentEmotion" : sampleCurrentEmotions,
        "history" : oHistory,
        "predictive" : oHistory
      }
    }]
};

var oCurrentEmotion = {};

var response = function(res) {
  oCurrentEmotion = res;
}
var logError = function(err) {
    console.log(err);
}

// The client will emit an RTM.AUTHENTICATED event on successful connection, with the `rtm.start` payload
rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
  oMessageBody = {team: message.team,
                  channel: message.channel,
                  text: message.text};
  indico.emotion(oMessageBody.text)
    .then(response, oMessageBody)
    .catch(logError);
  updateEmotionBody(oCurrentEmotion, oMessageBody);
});
rtm.start();

function updateEmotionBody(res, message1) {
  var workspace = message1.team;
  var channel = message1.channel;
  if (!(workspace in oEmotionBody)) {
    updateWhenNewWorkspace(workspace, channel);
  } else if(isChannelIncluded(workspace, channel) == null) {
    updateWhenNewChannel(workspace, channel);
  } else {
    updateChannelEmotion(workspace, channel, res);
  }
  
}

function updateWhenNewWorkspace(workspace, channel) {
  oEmotionBody[workspace] = { workspace : [{ channel : {"currentEmotion" : sampleCurrentEmotions,
                                                        "history" : oHistory,
                                                        "predictive" : oHistory }}]
                           };
}

function isChannelIncluded(workspace, channel) {
  let channels = oEmotionBody[workspace];
  for(var i = 0; i < channels.length; i++){
    let channelString = Object.keys(channels[i])[0];
    if(channelString === channel) {
      return channels[i];
    }
  }
  return null;
}


function updateWhenNewChannel(workspace, channel) {
  let newChannel = {};
  newChannel[channel] = { "currentEmotion" : sampleCurrentEmotions,
                          "history" : oHistory,
                          "predictive" : oHistory };
  oEmotionBody[workspace].push(newChannel);
}

function updateChannelEmotion(workspace, channel, res) {
  let currentChannel = isChannelIncluded(workspace, channel);
  let previousCurrentEmotion = currentChannel[channel].currentEmotion;
  let emotionHistory = currentChannel[channel].history;
  currentChannel[channel].history = [previousCurrentEmotion, emotionHistory[0], emotionHistory[1]];
  currentChannel[channel].currentEmotion = res;
}

export function getPosts(req, res) {
  Post.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deletePost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}
