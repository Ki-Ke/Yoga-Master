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
    },
    {
        name: "Extended Triangle Pose",
        sanskritName: "Utthita Trikonasana",
        speech: `First lightly jump your feet 3 1/2 to 4 feet apart. Raise your arms parallel to the floor and reach them actively out to the sides, shoulder blades wide, palms down. ${five} Next Turn your left foot in slightly to the right and your right foot out to the right 90 degrees. Align the right heel with the left heel. Firm your thighs and turn your right thigh outward, so that the center of the right knee cap is in line with the center of the right ankle. ${five} Next Exhale and extend your torso to the right directly over the plane of the right leg, bending from the hip joint, not the waist. Anchor this movement by strengthening the left leg and pressing the outer heel firmly to the floor. Rotate the torso to the left, keeping the two sides equally long. Let the left hip come slightly forward and lengthen the tailbone toward the back heel ${five} Next Rest your right hand on your shin, ankle, or the floor outside your right foot, whatever is possible without distorting the sides of the torso. Stretch your left arm toward the ceiling, in line with the tops of your shoulders. Keep your head in a neutral position or turn it to the left, eyes gazing softly at the left thumb. ${five} Now Stay in this pose for 30 seconds to 1 minute. Inhale to come up, strongly pressing the back heel into the floor and reaching the top arm toward the ceiling. Reverse the feet and repeat for the same length of time to the left.`,
        description: "Trikonasana or Triangle Pose is an asana. Variations include utthita trikonasana, baddha trikonasana and parivrtta trikonasana.",
    },
    {
        name: "Crescent Pose",
        sanskritName: "Anjaneyāsana",
        speech: `First start Exhale and step your right foot forward between your hands, aligning your knee over the heel. Keep your left leg strong and firm. ${five} Next Inhale and raise your torso to upright. At the same time, sweep your arms wide to the sides and raise them overhead, palms facing. ${five} Next Be careful not to overarch the lower back. Lengthen your tailbone toward the floor and reach back through your left heel. This will bring the shoulder blades deeper into the back and help support your chest. Look up toward your thumbs. ${five} Next Be sure not to press the front ribs forward. Draw them down and into the torso. Lift the arms from the lower back ribs, reaching through your little fingers. Hold for 30 seconds to a minute. ${five} Now Then exhale, release the torso to the right thigh, sweep your hands back onto the floor, and, with another exhale, step your right foot back and return to Down Dog. Hold for a few breaths and repeat with the left foot forward for the same length of time.`,
        description: "This variation of High Lunge, sometimes called Crescent Pose, is a great preparation for the full version of Virabhadrasana I (Warrior I Pose)",
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