# People
The `/people` page is managed by the file `content/data/people.yaml`.

- `id`: is the ID of the person. This can be used in a posts author value. This will be `yamlId` in graphQL.
- `fullName`: Full Name of the person.
- `title`: job title of the person.
- `bio`: The biography of the person
- `email`: email of person
- `linkedIn`: LinkedIn suffix. URL min `https://www.linkedin.com/`
- `github`: GitHub suffix. URL min `https://www.github.com/`
- `gifPlaceHolder`: An image of the GIF. See below.
- `profilePictureGif`: The gif for the person. See below.

## Making a gif
It is recommended to make a gif using your phone in portrait. Preferable with an aspect ratio
(width/height) between 0.7 and 0.85. If it is bigger then this someone (benjamin) is going to have
to hack some scss fix for you.

## gifPlaceHolder generation
It is important that the gifPlaceholder has the same height and width of the gif. Generate the
gifPlaceHolder by selecting a nice jpg from the gif using this site: https://ezgif.com/gif-to-jpg.
ezgif.com will generate the gifPlaceHolder with the correct height and width.
