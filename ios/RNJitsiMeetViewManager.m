#import "RNJitsiMeetViewManager.h"
#import "RNJitsiMeetView.h"
#import <JitsiMeet/JitsiMeetUserInfo.h>

@implementation RNJitsiMeetViewManager{
    RNJitsiMeetView *jitsiMeetView;
}

RCT_EXPORT_MODULE(RNJitsiMeetView)
RCT_EXPORT_VIEW_PROPERTY(onConferenceJoined, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onConferenceTerminated, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onConferenceWillJoin, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onEnteredPip, RCTBubblingEventBlock)

- (UIView *)view
{
  jitsiMeetView = [[RNJitsiMeetView alloc] init];
  jitsiMeetView.delegate = self;
  return jitsiMeetView;
}

// Okay so what are you doing here 😅
RCT_EXPORT_METHOD(initialize)
{
    RCTLogInfo(@"Initialize is deprecated in v2");
}

/*
 *  Function to start a video call
 *  @param url string of the call
 *  @param userInfo an object with the details of the user joining the call
 */
RCT_EXPORT_METHOD(call:(NSString *)urlString userInfo:(NSDictionary *)userInfo)
{
    RCTLogInfo(@"Load URL %@", urlString);
    JitsiMeetUserInfo * _userInfo = [[JitsiMeetUserInfo alloc] init];
    if (userInfo != NULL) {
      if (userInfo[@"displayName"] != NULL) {
        _userInfo.displayName = userInfo[@"displayName"];
      }
      if (userInfo[@"email"] != NULL) {
        _userInfo.email = userInfo[@"email"];
      }
      if (userInfo[@"avatar"] != NULL) {
        NSURL *url = [NSURL URLWithString:[userInfo[@"avatar"] stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet URLQueryAllowedCharacterSet]]];
        _userInfo.avatar = url;
      }
    }
    dispatch_sync(dispatch_get_main_queue(), ^{
        JitsiMeetConferenceOptions *options = [JitsiMeetConferenceOptions fromBuilder:^(JitsiMeetConferenceOptionsBuilder *builder) {        
            builder.room = urlString;
            builder.userInfo = _userInfo;
        }];
        [jitsiMeetView join:options];
    });
}

/*
 *  Function to start a audio call
 *  @param url string of the call
 *  @param userInfo an object with the details of the user joining the call
 */
RCT_EXPORT_METHOD(audioCall:(NSString *)urlString userInfo:(NSDictionary *)userInfo)
{
    RCTLogInfo(@"Load Audio only URL %@", urlString);
    JitsiMeetUserInfo * _userInfo = [[JitsiMeetUserInfo alloc] init];
    if (userInfo != NULL) {
      if (userInfo[@"displayName"] != NULL) {
        _userInfo.displayName = userInfo[@"displayName"];
      }
      if (userInfo[@"email"] != NULL) {
        _userInfo.email = userInfo[@"email"];
      }
      if (userInfo[@"avatar"] != NULL) {
        NSURL *url = [NSURL URLWithString:[userInfo[@"avatar"] stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet URLQueryAllowedCharacterSet]]];
        _userInfo.avatar = url;
      }
    }
    dispatch_sync(dispatch_get_main_queue(), ^{
        JitsiMeetConferenceOptions *options = [JitsiMeetConferenceOptions fromBuilder:^(JitsiMeetConferenceOptionsBuilder *builder) {        
            builder.room = urlString;
            builder.userInfo = _userInfo;
            builder.audioOnly = YES;
        }];
        [jitsiMeetView join:options];
    });
}

/*
 *  Function to end the current call, be it video or audio
 */
RCT_EXPORT_METHOD(endCall)
{
    dispatch_sync(dispatch_get_main_queue(), ^{
        [jitsiMeetView leave];
    });
}

#pragma mark JitsiMeetViewDelegate
/*
 *  Returns the details of the conference user joined 
 */
- (void)conferenceJoined:(NSDictionary *)data {
    RCTLogInfo(@"Conference joined");
    if (!jitsiMeetView.onConferenceJoined) {
        return;
    }

    jitsiMeetView.onConferenceJoined(data);
}

/*
 *  Notify when a conference has been terminated
 */
- (void)conferenceTerminated:(NSDictionary *)data {
    RCTLogInfo(@"Conference terminated");
    if (!jitsiMeetView.onConferenceTerminated) {
        return;
    }

    jitsiMeetView.onConferenceTerminated(data);
}

/*
 *  Returns the details of the conference to be joined
 */
- (void)conferenceWillJoin:(NSDictionary *)data {
    RCTLogInfo(@"Conference will join");
    if (!jitsiMeetView.onConferenceWillJoin) {
        return;
    }

    jitsiMeetView.onConferenceWillJoin(data);
}

/*
 *  Notify when we have entered PnP mode, this is when user clicks the bome button while still in a conferece
 *  Think of it like Youtube or Whatsapp, when you are watching a video or during a call and you switch apps
 *  and you have a tiny box on the bottom of your screen with the video still displaying
 */
- (void)enterPictureInPicture:(NSDictionary *)data {
    RCTLogInfo(@"Enter Picture in Picture");
    if (!jitsiMeetView.onEnteredPip) {
        return;
    }

    jitsiMeetView.onEnteredPip(data);
}

@end