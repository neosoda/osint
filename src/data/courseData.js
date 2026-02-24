// Master course data — assembles all phase modules
import { phase0 } from './phases/phase0.js';
import { phase1 } from './phases/phase1.js';
import { phase2 } from './phases/phase2.js';
import { phase3 } from './phases/phase3.js';
import { phase4 } from './phases/phase4.js';
import { phase5 } from './phases/phase5.js';
import { phase6 } from './phases/phase6.js';
import { phase7 } from './phases/phase7.js';
import { phase8 } from './phases/phase8.js';
import { phase9 } from './phases/phase9.js';

export const courseData = [
    phase0,
    phase1,
    phase2,
    phase3,
    phase4,
    phase5,
    phase6,
    phase7,
    phase8,
    phase9,
];

export const flatLessons = courseData.flatMap(m => m.lessons);
