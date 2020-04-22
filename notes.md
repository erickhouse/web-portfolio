## TODO

- Add the open source and certification sections
- fix warnings

## Notes

## 4/21/20

- deploy new changes
    - npm build
    - copy / paste into erickhouse.github.io repository

### bulma

- I sort of cheated and created a global scss override of bulma
styles. I could not re-import bulma and override them in a module file
it would complete change the behavior of bulma.
- `@use` in scss doesn't work with the current webpack config. I have no idea why.
    
### scroll spy
 - has its own branch
 - was unable to get it to work because of 
 a timing issue with the use effect hook and the 
 position of the scroll
 - click link and actual scroll position were competing
 and the state flickered 
 - decided to use standard href links instead.
 
### stick / fixed positions
- These seem to have different behaviors when in their
fixed position. Sticky is relative until its scroll position is hit
and then it becomes fixed. Fixed removes the content from the document flow.
    - for some reason sticky maintains its natural width even 
    in its fixed state. The flex box doesn't move over (unexpected).
    - when using fixed the flex items to the right always move (expected).
    - I cannot explain why flexbox works with sticky (always maintains its position in the document) when
    it should behave the same way as fixed (is removed from document flow)
    
## Future

- try styled components instead of css modules
- use github actions to copy dist over
- clicking on an item goes to a detailed page
- have skills overflow after 5 or 6.
- filter content by skills
- filter content by a two-way date slider
- add links to the github project or the company's website.
- more cleanly create a master `Set` of tags by post processing the resume input
- skills should probably have color tiers
- company logo + color? 
- create a preview mode of the pdf resume

## Thoughts

- maybe move skills to own section, nav to the right, and then filters on top.
    
