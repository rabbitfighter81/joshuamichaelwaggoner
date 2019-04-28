
#!/bin/bash
# file: locale-postbuild.sh

echo 'Installing production builds for locales script...'

# Msg & Build for English
echo $'---------------\n~~~ English ~~~\n---------------'
ng build --prod --i18n-locale en --i18n-format xlf --i18n-file src/translate/messages.en.xlf --output-path=dist/en --baseHref /en/

# Msg & Build for German
echo $'--------------\n~~~ German ~~~\n--------------'
ng build --prod --i18n-locale de --i18n-format xlf --i18n-file src/translate/messages.de.xlf --output-path=dist/de --baseHref /de/

# Msg & Build for Spanish
echo $'---------------\n~~~ Spanish ~~~\n---------------'
ng build --prod --i18n-locale es --i18n-format xlf --i18n-file src/translate/messages.es.xlf --output-path=dist/es --baseHref /es/

echo 'Fin...'