# Edits on the base.scss file

The class "half" in the _base.scss file:

The width was changed to:

width: 250px on line 221.

The class "third" in the _base.scss file:

The width was changed to:

width: 65px on line 236.

A class fourth was added to the _base.scss file on line 245:

The width was set to:

width: 200px;

## Edits on the gallery.html file

The else statement on line 14, the gallery_layout was changed to "fourth" instead of "".

The figcaption was edited using the .mfp-img class, this' to account for the image-pop size in the mobile view.

It was edited in the gallery.html file on line 25.

This code was added to the styling to account for mobile views:

<style>
  @media screen and (max-width: 480px) {
  .image-mobile{
    width: 65px !important;
    height: auto !important;
  }
  .mfp-img{
    width: 175px !important;
    height: auto !important;
  }
  .fourth, .half{
    width: 380px !important;
    height: auto !important;
    flex-direction: row !important;
    justify-content: space-around;
  }
   .half .image-mobile{
    width: 125px !important;
    height: auto !important;
  }
  .fourth  .image-mobile{
    width: 100px !important;
    height: auto !important;
  }
}
</style>

A class called "mobile-view" was added to the img tag on line 51.


## Files that needs to be kept for the remote-theme to work

1. The _base.scss was added under the  _sass folder, so it shouldn't be deleted.

2. The gallery.html file was added under the _include folder.

3. Other files were added under the _include folder, but it cannot be determined whether it affects the functionality of the website, but it's best to keep the file.
