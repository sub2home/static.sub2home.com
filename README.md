static-content
==============

[![wercker status](https://app.wercker.com/status/42f08976750b431c1c42e41d5ef2f24f/m "wercker status")](https://app.wercker.com/project/bykey/42f08976750b431c1c42e41d5ef2f24f)

## General

Everything inside the `content` directory will be processed and copied to a `dist` folder. The URL mapping to Cloudfront or S3 starts inside the `dist` folder (mostly identical to `content`).

## Images

Source images in the `content/images` folder need to be at least twice as big as the specified dimension in the **types** table to enable retina support.

### Types

Every type `x` will also have a type `x-2x `.

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
`a-2x` | `images/some/folder/a-2x/image.png` | `140 * 140`
`b` | `images/some/folder/b/image.jpg` | `70 * 70`
`b-2x` | `images/some/folder/b-2x/image.jpg` | `140 * 140`
`c` | `images/some/folder/c/image.jpg` | `200 * 200`
`c-2x` | `images/some/folder/c-2x/image.jpg` | `400 * 400`
`d` | `images/some/folder/d/image.jpg` | `500 * 500`
`d-2x` | `images/some/folder/d-2x/image.jpg` | `1000 * 1000`
`e` | `images/some/folder/e/image.jpg` | `300 * 300`
`e-2x` | `images/some/folder/e-2x/image.jpg` | `600 * 600`
`f` | `images/some/folder/f/image.png` | `300 * 300`
`f-2x` | `images/some/folder/f-2x/image.png` | `600 * 600`
`g` | `images/some/folder/g/image.png` | `213 * 160`
`g-2x` | `images/some/folder/g-2x/image.png` | `426 * 320`

