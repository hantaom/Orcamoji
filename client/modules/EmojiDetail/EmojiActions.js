export const CHANNEL_SELECTED = "CHANNEL_SELECTED";

export function selectChannel(emotions, workspace, channel) {
    return ({
        type: CHANNEL_SELECTED,
        payload: {
            emotions: emotions,
            workspace: workspace,
            channelName: channel
        }
    });
}