var AM = new AssetManager();
AM.queueDownload("./img/background.jpg");
AM.queueDownload("./img/StarWarsLogo.png");
AM.queueDownload("./img/luke_sprites_right.png");
AM.queueDownload("./img/luke_sprites_left.png");
AM.queueDownload("./img/vader_1560x1040.png");
AM.queueDownload("./img/blueLightsaber.png");
AM.queueSound("./sounds/VaderVsLukeTheme.mp3");
AM.queueSound("./sounds/Swing2.WAV");
AM.queueSound("./sounds/MenuSelect.wav");
AM.queueSound("./sounds/VolumeUp.wav");
AM.queueSound("./sounds/VolumeDown.wav");
AM.queueSound("./sounds/CycleMenu.wav");
AM.downloadAll(function () {
    new GameMenu();
});