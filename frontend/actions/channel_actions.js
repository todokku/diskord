import * as ChannelAPIUtil from "../util/channel_api_util";
import { receiveErrors } from "./session_actions";

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const createChannel = channel => dispatch => {
  return ChannelAPIUtil.createChannel(channel).then(
    channel => dispatch(receiveChannel(channel)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const fetchChannels = guild_id => dispatch => {
  return ChannelAPIUtil.fetchChannels(guild_id).then(channels =>
    dispatch(receiveChannels(channels))
  );
};
