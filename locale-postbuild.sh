
#!/bin/bash
# file: locale-postbuild.sh
echo 'Installing production builds for locales script...'

# Build for English
echo '~~~ English ~~'
ng build --prod --i18n-locale en --i18n-format xlf --i18n-file src/translate/messages.en.xlf --output-path=dist/en --baseHref /en/
# Build for German
echo '~~~ German ~~~'
ng build --prod --i18n-locale de --i18n-format xlf --i18n-file src/translate/messages.de.xlf --output-path=dist/de --baseHref /de/
# Build for Spanish
echo '~~~ Spanish ~~~'
ng build --prod --i18n-locale es --i18n-format xlf --i18n-file src/translate/messages.es.xlf --output-path=dist/es --baseHref /es/

echo 'Fininshed building for locales...'