![Repo-Image](https://massimo.gg/github-images/qippx.webp)

<div align="center">

# Paste Sharing Website (qippx.xyz)

![License](https://img.shields.io/github/license/massimo-rnd/paste-sharing-website)
![Issues](https://img.shields.io/github/issues/massimo-rnd/paste-sharing-website)
![Forks](https://img.shields.io/github/forks/massimo-rnd/paste-sharing-website)
![Stars](https://img.shields.io/github/stars/massimo-rnd/paste-sharing-website)
![Last Commit](https://img.shields.io/github/last-commit/massimo-rnd/paste-sharing-website)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/massimo-rnd/paste-sharing-website?include_prereleases)

</div>

## 🚀 Overview

qippx.xyz is a PHP Text Sharing Website with Bootstrap 5 Frontend and MySQL Database connection

## ❗ IMPORTANT ❗
Version 2.0 removed the "report paste" feature. This is due to the fact that I am abandoning this project and won't keep an eye on the reports anyways.

Version 2.0 also marks the final version. In case anyone is interested in taking over this project, feel free to do so.

## 🎯 Features

- PHP Backend
- Bootstrap & JS Frontend
- MySQL Database connection

## 🛠️ Installation

1. Clone the repository into your /var/www/ folder:
   ```bash
   cd /var/www/
   git clone https://github.com/massimo-rnd/paste-sharing-website.git
   ```
2. Create a new Database:
   ```mysql
   CREATE DATABASE IF NOT EXISTS qippx;
    USE qippx;
    CREATE TABLE pastes (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    keylink VARCHAR(64) NOT NULL,
    pastetext TEXT NOT NULL
    );
   ```
3. Change Database credentials in api.php:
    ```php
    // Replace these values with your database connection details
    $db_host = '';
    $db_user = '';
    $db_password = '';
    $db_name = '';
    ```
4. Create new Apache Virtualhost config
5. Visit your site

## 💻 Usage

Creating a new paste with qippx is simple. Just enter the text to be shared in the textbox and click "share".

Your link to your paste is copied to your clipboard and will look like this:
```bash
https://yoururl.tld/view?[XXXXXX]
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/massimo-rnd/paste-sharing-website/issues).

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📊 Repository Metrics

![Repo Size](https://img.shields.io/github/repo-size/massimo-rnd/paste-sharing-website)
![Contributors](https://img.shields.io/github/contributors/massimo-rnd/paste-sharing-website)
![Commit Activity](https://img.shields.io/github/commit-activity/m/massimo-rnd/paste-sharing-website)

---

### 📞 Contact

For any inquiries, feel free to reach out:
- email: [hi@massimo.gg](mailto:hi@massimo.gg)
- X: [massimo-rnd](https://x.com/massimo-rnd)
- [Discord](https://discord.gg/wmC5AA6c)
