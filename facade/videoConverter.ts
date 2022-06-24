// Functionality
interface Compressor {}
class VideoFile {}
class OggCompressionCodec implements Compressor {}
class MPEG4CompressionCodec implements Compressor {}
class CodeFactory {}
class BitrateReader {}
class AudioMixer {}

// Service or Facade or Frontal part of the app
enum Format {
  MP4 = 1,
  OGG = 2,
}
class VideoConverterService {
  private buffer: string = "";
  private file: VideoFile | null = null;
  private sourceCode: CodeFactory | null = null;
  private destinationCode: Compressor | null = null;
  convert(filename: string, format: Format) {
    this.file = new VideoFile();
    this.sourceCode = new CodeFactory();

    if (format === Format.MP4) {
      this.destinationCode = new MPEG4CompressionCodec();
    } else {
      this.destinationCode = new OggCompressionCodec();
    }
    // Add more implementation here ...
  }
}

// Client

class Application {
  convertor = new VideoConverterService();
  main() {
    //mp4 = this.convertor.convert("file", Format.MP4)
    //mp4.save()
  }
}
