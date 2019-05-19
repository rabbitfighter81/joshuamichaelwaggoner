#!/bin/bash
# file: locale-postbuild.sh

echo $'\nInstalling and building locale bundles from source...'

# Msg & Build for English
echo $'\n~~~~~~~~~~~~~~~\n~~~ English ~~~\n~~~~~~~~~~~~~~~\n'
yarn run config --environment=prod && ng build --prod --i18n-locale en --i18n-format xlf --i18n-file src/translate/messages.en.xlf --output-path=dist/en --baseHref /en/

# Msg & Build for German
echo $'\n~~~~~~~~~~~~~~\n~~~ German ~~~\n~~~~~~~~~~~~~~\n'
yarn run config --environment=prod && ng build --prod  --i18n-locale de --i18n-format xlf --i18n-file src/translate/messages.de.xlf --output-path=dist/de --baseHref /de/

# Msg & Build for Spanish
echo $'\n~~~~~~~~~~~~~~~\n~~~ Spanish ~~~\n~~~~~~~~~~~~~~~\n'
yarn run config --environment=prod && ng build --prod --i18n-locale es --i18n-format xlf --i18n-file src/translate/messages.es.xlf --output-path=dist/es --baseHref /es/

echo $'\nPlease update any missing translation files... :)\n'

echo $'\n~~~ Fin! ~~~\n'
