<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>MC Work</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="icon" type="image/x-icon" href="/assets/logo2.png">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet">
</head>
<body class="homepage">

        <header class="main-header">
                <div class="header-content">
                    <!-- Logo -->
                    <div class="logo-section">
                            <img src="/assets/logo2.png" alt="Logo MC Work" id="logo-img">
                            <span class="logo-text">MC Work</span>
                    </div>

                    <!-- Navigation -->
                    <nav id="menu" class="main-navigation">
                            <ul class="nav-menu">
                                <li class="nav-item active">
                                    <a href="index.php" class="nav-link">Accueil</a>
                                </li>
                                <li class="nav-item">
                                    <a href="service.php" class="nav-link">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a href="temoigne.php" class="nav-link">Témoignages clients</a>
                                </li>
                                <li class="nav-item">
                                    <a href="contact.php" class="nav-link">Contact</a>
                                </li>
                            </ul>
                    </nav>

                </div>

<div class="burger" id="burger">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <script>
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });
</script>

        </header>