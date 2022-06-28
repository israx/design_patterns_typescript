class ConfigManager {
  private constructor() {}
  private region = "us-east";
  private key = "123-abc-984";

  getRegion(): string {
    return this.region;
  }
  getKey(): string {
    return this.key;
  }
  static getInstance(): ConfigManager {
    var instance = new ConfigManager();
    return instance;
  }
}

const configManager: ConfigManager = ConfigManager.getInstance();

console.log(configManager.getKey());
