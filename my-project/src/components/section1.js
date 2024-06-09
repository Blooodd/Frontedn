import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Section1() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Welcome To Dark Souls Traveller!
      </Typography>
      <Typography variant="body1">
      In the age before memory, when the world was but a primordial chaos, there arose the First Flame. From its flickering embers, the land of Lordran emerged, a realm of towering citadels and sprawling dungeons, teeming with life and death in equal measure.

At the heart of this world lay the curse of the Undead, a blight that condemned mortals to a fate worse than death itself. Those afflicted found themselves bound to the eternal cycle of resurrection, unable to die, yet slowly losing their humanity with each passing revival.

In their struggle against this curse, the Undead sought solace in the legends of old, tales of powerful beings known as Lords, who had once harnessed the power of the First Flame to usher in an age of light and prosperity. But with the flame fading and the age of fire drawing to a close, Lordran stood on the brink of darkness.

As the flame dwindled, so too did the power of the Lords, leaving the fate of the world in the hands of the Undead. Some sought to prolong the age of fire, clinging to the fading light with desperate fervor. Others embraced the encroaching darkness, believing that only by letting the flame die could a new age be born.
      </Typography>
    </Box>
  );
}

export default Section1;