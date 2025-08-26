<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="MC Work - Services de dépannage et maintenance en plomberie, électricité, serrurerie">
    <title>MC Work - Services</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- En-tête -->
    <?php include 'header.php';?>
    <!-- Contenu principal -->
    <main class="main-content">
        <section class="hero-section">
            <div class="container">
                <h1 class="page-title">Services</h1>
                <p class="page-description">
                    MC Work vous propose des services de dépannage et de maintenance dans tous les domaines, 
                    que ce soit en plomberie, électricité, serrurerie, etc. Faites confiance à mon expertise 
                    et ma réactivité pour résoudre tous vos problèmes en un temps record. Contactez-moi dès 
                    maintenant pour un travail de qualité et un service personnalisé.
                </p>
            </div>
        </section>

        <section class="services-section">
            <div class="container">
                <div class="services-grid">
                    <!-- Service 1 -->
                    <article class="service-card">
                        <div class="service-image">
                            <img src="/assets/reparation.jpg" alt="Réparations diverses">
                        </div>
                        <div class="service-content">
                            <h2 class="service-title">Réparations Diverses</h2>
                            <p class="service-description">
                                MC Work vous propose des services de dépannage et de maintenance dans tous 
                                les domaines, que ce soit en plomberie, électricité, serrurerie, etc. 
                                Faites confiance à mon expertise et ma réactivité pour résoudre tous vos 
                                problèmes en un temps record. Contactez-moi dès maintenant pour un travail 
                                de qualité et un service personnalisé.
                            </p>
                        </div>
                    </article>

                    <!-- Service 2 -->
                    <article class="service-card">
                        <div class="service-image">
                            <img src="/assets/install.jpg" alt="Installation de prises et luminaires">
                        </div>
                        <div class="service-content">
                            <h2 class="service-title">Installation de prises et luminaire</h2>
                            <p class="service-description">
                                L'installation et la réparation de prise et luminaire permet de rester 
                                en sécurité de vos installations et d'y voir clair !
                            </p>
                        </div>
                    </article>

                    <!-- Service 3 -->
                    <article class="service-card">
                        <div class="service-image">
                            <img src="/assets/diag.jpg" alt="Diagnostics électriques">
                        </div>
                        <div class="service-content">
                            <h2 class="service-title">Diagnostics et recherche de panne électriques</h2>
                            <p class="service-description">
                                Le diagnostic et la recherche de panne demande un savoir-faire précis 
                                et une attention particulière pour un résultat impeccable.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </main>

    <!-- Pied de page -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-columns">
                    <div class="footer-column contact-info">
                        <h2 class="footer-title">Me contacter</h2>
                        <div class="contact-item">
                            <strong>Nous appeler</strong><br>
                            <a class="contact-link">07.86.22.98.00</a>
                        </div>
                        <div class="contact-item">
                            <strong>Adresse e-mail</strong><br>
                            <a class="contact-link">Mcwork93@gmail.com</a>
                        </div>
                    </div>

                <div class="footer-credits">
                    <p class="credits-text">Images fournies par <a href="https://pexels.com/" rel="nofollow">Pexels</a></p>
                </div>
            </div>

            <div class="footer-bottom">

            </div>
        </div>
    </footer>
</body>
</html>