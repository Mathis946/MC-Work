<?php
require 'header.php';
?>

<main class="main-content contact-page">
    <section class="contact-header">
        <h1>Contact</h1>
    </section>

    <!-- Infos email & téléphone -->
    <section class="contact-infos">
        <div class="contact-infos-item">
            <div class="contact-icon">
                <embed src="https://duyn491kcolsw.cloudfront.net/files/1h/1hx/1hxj04.svg?ph=6c82136212" type="image/svg+xml" alt="email">
            </div>
            <h3>Adresse e-mail</h3>
            <p>Mcwork93@gmail.com</p>
        </div>

        <div class="contact-infos-item">
            <div class="contact-icon">
                <embed src="https://duyn491kcolsw.cloudfront.net/files/2a/2ar/2arfdo.svg?ph=6c82136212" type="image/svg+xml" alt="téléphone">
            </div>
            <h3>Numéro de téléphone</h3>
            <p>Tél :</p>
            <p><strong>07 86 22 98 00</strong></p>
        </div>
    </section>

    <!-- Ligne de séparation -->
    <div class="contact-separator"><hr></div>

    <section class="contact-body">
        <div class="contact-map">
            <iframe src="https://web-2022.webnode.it/widgets/googlemaps/?z=17&amp;a=noisy+le+sec"
                loading="lazy"
                style="border:0;" allowfullscreen></iframe>
        </div>

        <div class="contact-form">
            <h2>Besoin de nous contacter ?</h2>
            <div class="contact-intro">
                <p>
                    Chers clients,<br><br>
                    Vous recherchez un homme à tout faire de confiance pour vos travaux de maintenance ? 
                    Ne cherchez plus, je suis là pour vous servir ! 
                    Bienvenue chez <strong>MC Work</strong>, agent de maintenance depuis plus de 8 ans.
                </p>
            </div>

            <form action="" method="post">
                <div class="form-group">
                    <label for="field-name">Votre nom et prénom</label>
                    <input type="text" id="field-name" name="name-field" required maxlength="150">
                </div>

                <div class="form-group">
                    <label for="field-email">Adresse e-mail</label>
                    <input type="email" id="field-email" name="email-field" required maxlength="255">
                </div>

                <div class="form-group">
                    <label for="field-message">Message</label>
                    <textarea id="field-message" name="message-field" rows="5" required></textarea>
                </div>

                <button class="submit-button" type="submit" name="send" value="contact-form">
                    Soumettre
                </button>
            </form>
        </div>
    </section>
</main>

<?php
require 'footer.php';
?>
