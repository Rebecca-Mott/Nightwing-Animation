<!-- @format -->

Nightwing animation Explained

Using the @keyframes rule, we specify the CSS styles, and the animation will gradually change to the new style. We first have to bind the desired animation to an element.

The animation-duration property defines how long time an animation will take until it’s complete. The default value is 0 second, so, if you do not specify this property, the animation will not occur.

We can also use percentages when creating CSS animations. This allows you to use more style changes.

Properties for CSS animations

Now that we understand the basics of how CSS properties work with the keyframe at-rule, let’s discuss the main properties that can be applied to your animations for more functionality.

animation-name: determines the name of the animation

animation-delay: this property creates a delay for the beginning of your animation

animation-iteration-count: this property define how many times an animation will run

animation-timing-function: this property defines the speed curve, for example:

    linear: same speed from start to finish
    ease: slow start, then fast, end slowly
    ease-in: slow start
    ease-out: slow finish

animation-direction: this property determines if the animation will play forwards or backwards.

animation-fill-mode: this property determines the style of a target element when the animation is not playing. This is how we override the CSS rule that animations do not alter an element until we play the first keyframe.

    none: Animation will not apply any styles until executed
    forwards: Element will retain the style values set by the last keyframe
    backwards: Element will get the style values set by the first keyframe
    both: Animation extend the animation properties in both directions (forward and backward)

    Overview of Nightwing animation

Now let’s apply what we learned about CSS animations and build our own animation from scratch using just CSS and HTML. We will be making a simple animation of Night walking through a cave. If you choose, you can also include music to the animation.

To create My nightwing walk cycle animation, we will be using a sprite sheet. A sprite sheet is a bitmap PNG image file that contains several smaller graphics in a tiled grid arrangement.

Here, we can see that there are 12 different Nightwing images. Once we put them together as an animation, we will have a walk cycle animation! To so do, we will be creating two files: Moving_Nightwing.html and Moving_Nightwing.css.

all of my PNG assets for the animation where created in adobe photoshop.
