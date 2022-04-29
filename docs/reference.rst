.. raw:: html
    :file: _templates/nav.html

#########
Reference
#########

Documentation for a selection of our system’s common internal tools

.. contents:: Table of contents
    :depth: 2
    :local:

Commands
########

.. click:: newshomepages.accessibility:cli
   :prog: accessibility
   :nested: full

.. click:: newshomepages.archive:cli
   :prog: archive
   :nested: full

.. click:: newshomepages.discorder:cli
   :prog: discorder
   :nested: full

.. click:: newshomepages.docs:cli
   :prog: docs
   :nested: full

.. click:: newshomepages.extract:cli
   :prog: extract
   :nested: full

.. click:: newshomepages.hyperlinks:cli
   :prog: hyperlinks
   :nested: full

.. click:: newshomepages.shoot:cli
   :prog: shoot
   :nested: full

.. click:: newshomepages.telegrammer:cli
   :prog: telegrammer
   :nested: full

.. click:: newshomepages.tweet:cli
   :prog: tweet
   :nested: full

.. click:: newshomepages.wayback:cli
   :prog: wayback
   :nested: full

Utilities
#########

The `utils <https://github.com/palewire/news-homepages/blob/main/newshomepages/utils.py>`_ module contains a variety of functions used by our commands.

.. automodule:: newshomepages.utils
    :members:
