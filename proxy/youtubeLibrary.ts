interface VideoInfo {
  name: string;
  date: Date;
  url: string;
}

interface ThirdPartyYouTubeLib {
  listVideos(): VideoInfo[];
  getVideoInfo(id: string): VideoInfo;
  downloadVideo(id: string): void;
}

// Proxy
class CachedYouTubeClass implements ThirdPartyYouTubeLib {
  private service: ThirdPartyYouTubeLib;
  private cachedList: VideoInfo[] | null = null;
  private cachedVideo: VideoInfo | null = null;
  constructor(service: ThirdPartyYouTubeLib) {
    this.service = service;
  }
  listVideos(): VideoInfo[] {
    if (!this.cachedList) {
      this.cachedList = this.service.listVideos();
    }
    return this.cachedList;
  }
  getVideoInfo(id: string): VideoInfo {
    if (!this.cachedVideo) {
      this.cachedVideo = this.service.getVideoInfo(id);
    }
    return this.cachedVideo;
  }
  downloadVideo(id: string): void {}
}

class ThirdPartyYouTubeClass implements ThirdPartyYouTubeLib {
  listVideos(): VideoInfo[] {
    // call youtube api

    return [
      { name: "video 1", date: new Date(), url: "www.video1.com" },
      { name: "video 2", date: new Date(), url: "www.video2.com" },
      { name: "video 3", date: new Date(), url: "www.video3.com" },
    ];
  }
  getVideoInfo(id: string): VideoInfo {
    return { name: "video 1", date: new Date(), url: "www.video1.com" };
  }
  downloadVideo(id: string): void {
    // perform logic to download video
  }
}

class YouTubeManager {
  protected service: ThirdPartyYouTubeLib;
  private info = {};
  private list: VideoInfo[] = [];

  constructor(service: ThirdPartyYouTubeLib) {
    this.service = service;
  }

  renderVideoPage(id: string) {
    this.info = this.service.getVideoInfo(id);
  }

  //Render the video page.
  renderListPanel() {
    this.list = this.service.listVideos();
  }

  //Render the listof videot humbnails.

  reactOnUserInput() {
    this.renderVideoPage("123456");
    this.renderListPanel();
  }
}

function render() {
  var aYouTubeService = new ThirdPartyYouTubeClass();
  var aYouTubeProxy = new CachedYouTubeClass(aYouTubeService);
  var manager = new YouTubeManager(aYouTubeProxy);
  manager.reactOnUserInput();
}
