# Versions du site Baristas

- `main` : ancienne version, conservée sans modification.
- `codex/nouveau-design` : nouvelle version du site.
- Point de départ conservé : `8a9f2a4d78f903abb5f6af69056331f82ccf2371`.

## Choisir la version publiée

Dans Settings → Pages, si la source est « Deploy from a branch », sélectionner la branche souhaitée et le dossier « / (root) », puis Save. Attendre la fin du déploiement Pages.

Pour revenir à l’ancienne version, sélectionner à nouveau la branche qui était publiée auparavant (`main` si c’était la source actuelle). Ne pas supprimer ni fusionner les branches pour changer de version.

Si la source est GitHub Actions, vérifier le workflow de publication avant de changer la configuration.

La création de cette branche ne change pas la version publiée. GitHub Pages publie une seule source par dépôt : une branche supplémentaire ne crée pas automatiquement une seconde URL de prévisualisation.

Le fichier CNAME `baristas.info` est conservé. Aucun changement des paramètres Pages ni du domaine n’a été effectué.

Documentation : https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

