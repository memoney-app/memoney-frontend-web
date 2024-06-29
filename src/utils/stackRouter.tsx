// React Native Webview에 postMessage 요청
const sendRouterEvent = (path: string): void => {
  if (isApp()) {
    (window as any).ReactNativeWebView.postMessage(
      JSON.stringify({ type: "ROUTER_EVENT", data: path })
    );
  }
};

// 앱 환경인지 판단
const isApp = (): boolean => {
  return typeof window !== "undefined" && (window as any).ReactNativeWebView;
};

// 뒤로가기 하는 경우
export const stackRouterBack = (): void => {
  if (isApp()) {
    sendRouterEvent("back");
  } else {
    console.warn(
      "This function should be used in a React Native WebView context."
    );
  }
};

// push 하는 경우
export const stackRouterPush = (url: string): void => {
  if (isApp()) {
    sendRouterEvent(url);
  } else {
    console.warn(
      "This function should be used in a React Native WebView context."
    );
  }
};
