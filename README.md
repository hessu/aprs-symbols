
aprs.fi high-resolution symbol set
=====================================

This is a new APRS symbol graphics set, which can be used by any APRS
applications, for free.  I've assembled it in an effort to make aprs.fi look
better on modern high-resolution displays, including Retina and 4K displays. 
It is released to the APRS community on 2015-12-03 to celebrate the release
of the [aprs.fi iPhone/iPad
app](https://itunes.apple.com/app/aprs.fi/id922155038?mt=8&at=1000la28&ct=git).

![Primary table](png/aprs-symbols-24-0@2x.png)

![Secondary table](png/aprs-symbols-24-1@2x.png)

![Overlays](png/aprs-symbols-24-2@2x.png)


Format
--------

The new symbols are drawn in vector format (as opposed to a raster format at
a fixed resolution), allowing them to be rendered at larger and smaller
sizes without distortion or blurriness.  The new symbols are slightly larger
than the old ones, making them easier to recognise on modern displays having
smaller pixels than the old ones.  They can be rendered in high resolution
so that they're properly sharp on the 4K/retina displays found on many
modern tablets, phones and computers!

The symbol set is published in both vector (Adobe Illustrator/PDF) and
raster (PNG) formats.  Raster renderings are available in 24x24, 48x48,
64x64 and 128x128 pixel resolutions - drawing from raster sprites in apps is
usually quicker and easier than working with the vector source material. 
Having the vector sources makes it possible to improve them and and replace
individual symbols easily.  If you need to render other resolutions or make
some other fine tuning, you can run Illustrator for free for 30 days.  The
symbol set release even comes with a little piece of javascript which
crunches out the 3 PNG files (primary, secondary, overlay characters) at the
4 resolutions in a few seconds. The AI file contains some basic Illustrator
effects (blur, shadow).  Inkscape can probably open the .ai file,
but some of the effects might not work too well, I have not tried myself. 

The PNG files contain an alpha layer, which is used in many symbols for
(partial) transparency.  Make sure that is handled when using the PNGs.

Most symbols in the PNGs contain a little bit more unused space around the
actual symbol, than in the old symbol sets.  The amount of space also varies
slightly too much to my taste.  I will probably work on that later on.

**File naming, table identifiers:**

* aprs-symbols-SIZE-0.png: Primary table
* aprs-symbols-SIZE-1.png: Secondary table
* aprs-symbols-SIZE-2.png: Overlay characters

**File naming, sizes (follows iOS naming convention):**

* aprs-symbols-24-TABLEID.png: 24x24 pixels/symbol
* aprs-symbols-24-TABLEID@2x.png: 48x48 pixels/symbol
* aprs-symbols-64-TABLEID.png: 64x64 pixels/symbol
* aprs-symbols-64-TABLEID@2x.png: 128x128 pixels/symbol


Copyright info
-----------------

Naturally I did not draw all of the symbols myself. Many are loosely or
strongly based on the original symbol graphics, primarily to keep the
familiar and consistent look.  Some symbols I obtained from other sources,
such as Wikipedia.  In those cases I picked SVG versions which allow
commercial reuse (source known, and the work is placed on public domain, or
with a CC license which allows adaptation and commercial reuse).  In any
case, the source and copyright information is documented separately for each
symbol (see [COPYRIGHT](COPYRIGHT.md)).

If you use this symbol set, please provide a pointer to the source
(http://github.com/hessu/aprs-symbols/).

The aprs.fi symbol graphics set does not contain additional symbols for
overlays yet, mostly because it takes lots and lots of time to draw them,
and the effort it took to create this set was pretty high already.  Maybe
later!


Differences to original set
------------------------------

The symbol set should be generally compatible with the [Updated APRS Symbol
Set (Rev H)](http://wa8lmf.net/aprs/APRS_symbols.htm).

There is one obvious difference in the new symbol set: the "ham store"
symbol has been replaced with a more generic "store" shopping cart,
reflecting the current \h symbol definition in the master index.  Please use
the 'H' overlay character to specify an amateur radio shop.

To complement the symbol graphics, I've previously published [a
machine-readable (CSV/JSON/XML/YAML) APRS symbol description
index](https://github.com/hessu/aprs-symbol-index), which is easier to
integrate in applications than Bob's master list.

There will be some updates to this set. If you use it, please be prepared to
update the images from the master files.


IMPORTANT NOTE
-----------------

APRS symbols are not transmitted over the radio, or over the APRS-IS, as
small images.  A two-character code is transmitted, which guides the
receiving softare to display one of the symbols installed locally at
that end.

We can not make everyone see new symbols by just adding graphics here.
Everyone in the network need to update their symbol graphics files to see
new ones.  So, please do not suggest adding completely new symbols to this
file.  It just does not work like that.


Heikki Hannikainen
OH7LZB

