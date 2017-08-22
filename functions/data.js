const weekday = require('weekday');

const one = "<break time='1s'/>";
const two = "<break time='2s'/>";
const three = "<break time='3s'/>";
const four = "<break time='4s'/>";
const five = "<break time='5s'/>";

const monday = [
    {
        name: "Garland Pose",
        sanskritName: "Malasana",
        speech: `Squat with your feet as close together as possible. (Keep your heels on the floor if you can; otherwise, support them on a folded mat.) ${five} Next Separate your thighs slightly wider than your torso. Exhaling, lean your torso forward and fit it snugly between your thighs. ${five} Next Press your elbows against your inner knees, bringing your palms to together ${five} Next resist the knees into the elbows. This will help lengthen your front torso. ${five} Next To go further, press your inner thighs against the sides of your torso. Reach your arms forward, then swing them out to the sides and notch your shins into your armpits. Press your finger tips to the floor, or reach around the outside of your ankles and clasp your back heels ${five} Now Hold the position for 30 seconds, then inhale, straighten the knees`,
        description: "Mālāsana, or malasana, is a term for various squatted āsanas. The term is being used in various western transliterations, and may refer to various asanas, all involving a squatted position."
    },
    {
        name: "Four-Limbed Staff Pose",
        sanskritName: "Chaturanga Dandasana",
        speech: `First Firm your shoulder blades against your back ribs and press your tailbone toward your pubis. ${five} Next With an exhalation slowly lower your torso and legs to a few inches above and parallel to the floor. There's a tendency in this pose for the lower back to sway toward the floor and the tailbone to poke up toward the ceiling. Throughout your stay in this position, keep the tailbone firmly in place and the legs very active and turned slightly inward. Draw the pubis toward the navel. ${five} Next Keep the space between the shoulder blades broad. Don't let the elbows splay out to the sides; hold them in by the sides of the torso and push them back toward the heels. Press the bases of the index fingers firmly to the floor. Lift the top of the sternum and your head to look forward. ${five} Now You can also practice this pose individually for anywhere from 10 to 30 seconds. Release with an exhalation.`,
        description: "Chaturanga Dandasana or Four-Limbed Staff Pose, also known as Low Plank, is a Yoga asana, in which a straight body parallel to the ground is supported by the toes and palms, with elbows at a right angle.",
    }
];

/**
 *
 * @param index
 * @returns {{name, sanskritName, speech, description}|*}
 */
function getAsana(index) {
    switch(weekday()) {
        case 'Monday':
            return monday[index];
            break;
        case 'Tuesday':
            return monday[index];
            break;
        case 'Wednesday':
            return monday[index];
            break;
        case 'Thursday':
            return monday[index];
            break;
        case 'Friday':
            return monday[index];
            break;
        case 'Saturday':
            return monday[index];
            break;
        case 'Sunday':
            return monday[index];
            break;
        default:
            return data.monday[index];
            break;
    }
}

module.exports = {
    monday,
    getAsana
};