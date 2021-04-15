/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';

import './index.css';

export default function RelativityTheory() {
  return (
    <div className="theory-container">
      <h1>What is special relativity</h1>
      <h4>The theory is based on two key concepts.</h4>
      <ul>
        <li>
          First, the natural world allows no “privileged” frames of reference. As long as an object is moving in a straight line at a constant speed (that is, with no acceleration), the laws of physics are the same for everyone. It’s a bit like when you look out a train window and see an adjacent train appear to move — but is it moving, or are you? It can be hard to tell. Einstein recognized that if the motion is perfectly uniform, it's literally impossible to tell — and identified this as a central principle of physics.
        </li>
        <li>
          Second, light travels at an unvarying speed of 186,000 miles a second. No matter how fast an observer is moving or how fast a light-emitting object is moving, a measurement of the speed of light always yields the same result.
        </li>
      </ul>
      <p>
        Starting from these two postulates, Einstein showed that space and time are intertwined in ways that scientists had never previously realized. Through a series of thought experiments, Einstein demonstrated that the consequences of special relativity are often counterintuitive — even startling.
      </p>
      <p>
        If you’re zooming along in a rocket and pass a friend in an identical but slower-moving rocket, for example, you’ll see that your friend’s watch is ticking along more slowly than yours (physicists call this `&quot;`time dilation`&quot;`).
      </p>
      <p>
        What’s more, your friend’s rocket will appear shorter than your own. If your rocket speeds up, your mass and that of the rocket will increase. The faster you go, the heavier things become and the more your rocket will resist your efforts to make it go faster. Einstein showed that nothing that has a mass can ever reach the speed of light.
      </p>
      <p>
        Another consequence of special relativity is that matter and energy are interchangeable via the famous equation E = mc² (in which E stands for energy, m for mass, and c² the speed of light multiplied by itself). Because the speed of light is such a big number, even a tiny amount of mass is equivalent to — and can be converted into — a very large amount of energy. That’s why atomic and hydrogen bombs are so powerful.
      </p>
      <h1>What is general relativity?</h1>
      <p>
        Essentially, it’s a theory of gravity. The basic idea is that instead of being an invisible force that attracts objects to one another, gravity is a curving or warping of space. The more massive an object, the more it warps the space around it.
      </p>
      <p>
        For example, the sun is massive enough to warp space across our solar system — a bit like the way a heavy ball resting on a rubber sheet warps the sheet. As a result, Earth and the other planets move in curved paths (orbits) around it.
      </p>
      <p>
        This warping also affects measurements of time. We tend to think of time as ticking away at a steady rate. But just as gravity can stretch or warp space, it can also dilate time. If your friend climbs to the top of a mountain, you’ll see his clock ticking faster compared to yours; another friend, at the bottom of a valley, will have a slower-ticking clock, because of the difference in the strength of gravity at each place. Subsequent experiments proved that this indeed happens.
      </p>
      <h1>What does relativity look like 'under the hood?'</h1>
      <p>
        Special relativity is ultimately a set of equations that relate the way things look in one frame of reference to how they look in another — the stretching of time and space, and the increase in mass. The equations involve nothing more complicated than high-school math.
      </p>
      <p>
        General relativity is more complicated. Its “field equations” describe the relationship between mass and the curvature of space and dilation of time, and are typically taught in graduate-level university physics courses.
      </p>
      <h1>Tests of special and general relativity</h1>
      <p>
        Over the last century, many experiments have confirmed the validity of both special and general relativity. In the first major test of general relativity, astronomers in 1919 measured the deflection of light from distant stars as the starlight passed by our sun, proving that gravity does, in fact, distort or curve space.
      </p>
      <p>
        In 1971, scientists tested both parts of Einstein’s theory by placing precisely synchronized atomic clocks in airliners and flying them around the world. A check of the timepieces after the planes landed showed that the clocks aboard the airliners were running a tiny bit slower than (less than one millionth of a second) than the clocks on the ground.
      </p>
      <p>
        The disparity resulted from the speed of the planes (a special relativity effect) and their greater distance from the center of Earth’s gravitational field (a general relativity effect).
      </p>
      <p>
        In 2016, the discovery of gravitational waves — subtle ripples in the fabric of spacetime — was another confirmation of general relativity.
      </p>
      <h1>Relativity in practice</h1>
      <p>
        While the ideas behind relativity seem esoteric, the theory has had a huge impact on the modern world.
      </p>
      <p>
        Nuclear power plants and nuclear weapons, for example, would be impossible without the knowledge that matter can be transformed into energy. And our GPS (global positioning system) satellite network needs to account for the subtle effects of both special and general relativity; if they didn’t, they’d give results that were off by several miles.
      </p>
    </div>
  );
}
