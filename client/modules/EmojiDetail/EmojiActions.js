export const CHANNEL_SELECTED = "CHANNEL_SELECTED";

export function selectChannel(emotions, workspace, channel) {
    console.log(emotions);
    console.log(workspace);
    console.log(channel);
    return ({
        type: CHANNEL_SELECTED,
        payload: {
            emotions: emotions,
            workspace: workspace,
            channel: channel
        }
    });
}