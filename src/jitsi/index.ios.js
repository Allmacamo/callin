import { NativeModules, requireNativeComponent } from 'react-native';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');

export const JitsiMeetModule = NativeModules.RNJitsiMeetView;

/**
 * Video Call
 */
const call = JitsiMeetModule.call;

/**
 * Audio Call
 */
const audioCall = JitsiMeetModule.audioCall;

/**
 * Initiate video call
 * @param {String} url jitsi backend url of the video call
 * @param {Object} userInfo details of the user joining the call
 */
JitsiMeetModule.call = (url, userInfo) => {
  userInfo = userInfo || {};
  call(url, userInfo);
};

/**
 * Initiate audio call
 * @param {String} url jitsi backend url of the video call
 * @param {Object} userInfo details of the user joining the call
 */
JitsiMeetModule.audioCall = (url, userInfo) => {
  userInfo = userInfo || {};
  audioCall(url, userInfo);
};

export default JitsiMeetModule;
