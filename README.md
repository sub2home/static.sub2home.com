static-content
==============

## General

Everything inside the `content` directory will be processed and copied to a `dist` folder. The URL mapping to Cloudfront or S3 starts inside the `dist` folder (mostly identical to `content`).

## Images

Source images in the `content/images` folder need to be at least twice as big as the specified dimension in the **types** table to enable retina support.

### Types

Every type `x` will also have a type `x-retina`.

Type | Filetype | Quality |  Dimensions in `px` | Comment
--- | --- | --- | --- | ---
`a` | png | 100% | `70 * 70` | -
`b` | jpg | 100% | `70 * 70 ` | Rest filled with white
`c` | jpg | 100% | `200 * 200 ` | Rest filled with white
`d` | jpg | 100% | `500 * 500` | Rest filled with white
`e` | jpg | 100% | `300 * 300` | Rest filled with white
`f` | png | 100% | `300 * 300` | -
`g` | png | 100% | `_ * 160` | -

### Output

An example image like `images/some/folder/image.png` with dimension `640px * 480px` will generate the following images:

Type | Path | Dimensions in `px`
--- | --- | ---
*original image* | `images/some/folder/image.png`
`a` | `images/some/folder/a/image.png` | `70 * 70`
`a-retina` | `images/some/folder/a-retina/image.png` | `140 * 140`
`b` | `images/some/folder/b/image.jpg` | `70 * 70`
`b-retina` | `images/some/folder/b-retina/image.jpg` | `140 * 140`
`c` | `images/some/folder/c/image.jpg` | `200 * 200`
`c-retina` | `images/some/folder/c-retina/image.jpg` | `400 * 400`
`d` | `images/some/folder/d/image.jpg` | `500 * 500`
`d-retina` | `images/some/folder/d-retina/image.jpg` | `1000 * 1000`
`e` | `images/some/folder/e/image.jpg` | `300 * 300`
`e-retina` | `images/some/folder/e-retina/image.jpg` | `600 * 600`
`f` | `images/some/folder/f/image.png` | `300 * 300`
`f-retina` | `images/some/folder/f-retina/image.png` | `600 * 600`
`g` | `images/some/folder/g/image.png` | `213 * 160`
`g-retina` | `images/some/folder/g-retina/image.png` | `426 * 320`

