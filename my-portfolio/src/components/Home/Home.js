import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import myVideo from '../../assets/Profile_video.mp4';
import { useRef } from 'react';

function Home() {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        videoRef.current.play();
    }
    const handleMouseLeave = () => {
        videoRef.current.pause();
    }

    return (
        <section className='container-Home'>
            <div className="Home">
                <article className="Home-me">
                    <h1 className="Home-me-title">Web Developer.</h1>
                    <p className="Home-me-text">Bonjour !
                    I'm Tenzin, a passionate web developer based in the enchanting city of Paris, France.</p>
                    <ul className="Home-me-social">
                      <li><a href='https://www.linkedin.com/in/lekdup/' target='blank' title='LinkedIn' className='Home-me-social-linkedin'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                      <li><a href='https://github.com/lekdup' target='blank' title='GitHub' className='Home-me-social-github'><FontAwesomeIcon icon={faGithub} /></a></li>
                      <li><a id="cv" href="https://drive.google.com/file/d/1GZap1Ty7l6peQe_luh8qCJDTkCXqHzY0/view?usp=sharing" target='blank'>Resume <FontAwesomeIcon icon={faDownload} /></a></li>
                    </ul>
                </article>
                <div className="Home-profile-video">
                    <video
                        loop
                        muted
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        ref={videoRef}
                    >
                        <source src={myVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="skills">
                <h3 className='skills-title'>Tech Stack |</h3>
                <ul className='skills-list'>
                    <li className='skills-list-name' data-name="HTML5">
                    <svg viewBox="-8 -8 40 40" id="html5">
                    <path fill='#E2E8F0' d="M3.1825,2.00012,4.78735,20.00079l7.20191,1.99933,7.22168-2.00207L20.8175,2.00012ZM17.32507,7.88739H8.87683l.20178,2.26074h8.04554l-.60584,6.778L12,18.17834v.00043l-.01013.00275L7.46753,16.92615,7.1582,13.45972H9.37439l.1571,1.76074,2.45874.66388.00208-.00049v-.00018l2.46228-.66461.25635-2.86323H7.05957L6.46411,5.67969h11.0586Z"></path>
                    </svg>
                    </li>
                    <li className='skills-list-name' data-name="CSS3">
                    <svg viewBox="-8 -8 40 40" id="css3">
                        <path fill='#E2E8F0' d="M3.19467,2,4.79734,19.99433,11.98947,22l7.2119-2.01315L20.80533,2ZM17.476,6.12274l-.53371,5.99468.00193.03234-.00255.07415v-.00068l-.37922,4.19135-.04178.37236L12,18.03717v.00063l-.00366.00317L7.48367,16.78309l-.30574-3.46518h2.213l.15692,1.76226,2.45276.6644L12,15.74569l2.46141-.6743.26028-2.86933H9.57589L9.53173,11.717l-.10093-1.1364-.05224-.61022h5.53877l.20163-2.2317H6.68232L6.638,7.2542l-.10026-1.137L6.48482,5.507H17.52887Zm0,0"></path>
                    </svg>
                    </li>
                    <li className='skills-list-name' data-name="Sass">
                        <svg viewBox="-6 -3 42 34" id="sass">
                        <path fill='#E2E8F0' d="m27.533 13.796c.039-.001.085-.002.132-.002.834 0 1.623.194 2.323.54l-.031-.014c.638.311 1.162.771 1.541 1.335l.009.014c.299.436.477.975.477 1.555 0 .042-.001.084-.003.125v-.006c-.031.579-.294 1.09-.698 1.448l-.002.002c-.221.217-.488.387-.785.495l-.015.005q-.25.05-.275-.075t.225-.275c.452-.274.779-.716.898-1.237l.003-.013c.003-.042.005-.091.005-.141 0-.311-.074-.605-.205-.865l.005.011c-.217-.453-.541-.825-.94-1.094l-.01-.006c-.597-.384-1.313-.636-2.083-.699l-.016-.001c-.262-.039-.564-.061-.872-.061-.801 0-1.566.151-2.27.426l.042-.015c.145.339.236.732.249 1.144v.005c-.016.845-.47 1.58-1.145 1.99l-.011.006c-.31.22-.664.413-1.041.563l-.035.012c-.229.112-.498.177-.782.177-.033 0-.065-.001-.097-.003h.005q-.949-.199-.45-1.65c.145-.421.348-.786.605-1.107l-.006.007c.329-.43.69-.807 1.089-1.141l.011-.009-.098-.146c-.183-.312-.351-.675-.486-1.054l-.014-.046q-.15-.5-.25-.949l-.05-.35-.5.949q-.65 1.2-1.25 2.099l-.15.25c.168.408.292.881.348 1.375l.002.025c.004.047.006.103.006.159 0 .758-.374 1.428-.948 1.837l-.007.005c-.274.169-.601.344-.94.5l-.06.025c-.353.153-.762.253-1.191.275h-.009c-.033.002-.072.004-.111.004-.25 0-.487-.057-.699-.158l.01.004c-.127-.109-.207-.269-.207-.448 0-.091.021-.178.058-.255l-.002.004c.4-.561.794-1.049 1.213-1.515l-.013.015 1.1-1.399-.199-.45c-.16-.294-.313-.641-.436-1.001l-.014-.048q-.15-.5-.25-.949l-.05-.35-.5 1.2q-.599 1.399-1.1 2.399-.747 1.5-1.25 2.3l-.1.15q-.599.949-1.15.949t-.747-.7c-.096-.344-.152-.739-.152-1.147 0-.036 0-.072.001-.108v.005l.1-.7v.05q-.4.949-.8 1.749c-.177.346-.359.641-.563.919l.013-.019c-.206.216-.496.35-.817.35-.003 0-.005 0-.008 0-.021.002-.045.002-.069.002-.253 0-.483-.096-.657-.253l.001.001c-.349-.358-.608-.805-.742-1.304l-.005-.021c-.164-.455-.258-.981-.258-1.529 0-.071.002-.141.005-.21v.01c.079-.796.238-1.525.471-2.22l-.021.071-1.799 1.05v.05c.261.542.414 1.178.414 1.85 0 .123-.005.245-.015.365l.001-.016c-.053 1.03-.382 1.973-.913 2.77l.013-.02c-.557.884-1.36 1.567-2.314 1.962l-.033.012c-.537.241-1.165.382-1.825.382-.418 0-.824-.056-1.208-.162l.032.007c-.318-.107-.578-.319-.743-.593l-.003-.006c-.233-.338-.38-.751-.403-1.196v-.006c-.011-.101-.017-.218-.017-.337 0-.513.117-.999.326-1.432l-.009.02c.574-.979 1.368-1.772 2.316-2.33l.03-.016c.671-.465 1.442-.916 2.247-1.309l.106-.047.25-.15q-.45-.35-1.65-1.2c-1.069-.716-1.998-1.439-2.874-2.221l.025.022c-.847-.729-1.464-1.703-1.741-2.812l-.008-.038c-.026-.154-.041-.331-.041-.511 0-.564.145-1.094.399-1.555l-.008.017c.56-1.204 1.336-2.219 2.288-3.035l.012-.01c1.03-.973 2.196-1.82 3.462-2.506l.087-.043c1.131-.653 2.452-1.26 3.829-1.747l.17-.052c1.279-.468 2.756-.742 4.296-.747h.002c.07-.002.153-.004.236-.004 1.241 0 2.415.287 3.459.798l-.046-.021c.9.41 1.574 1.182 1.844 2.126l.006.024c.083.322.13.692.13 1.073 0 .632-.131 1.234-.366 1.78l.011-.029c-.428 1.037-1.037 1.92-1.797 2.647l-.003.003c-.77.763-1.693 1.373-2.718 1.78l-.055.019c-1.074.461-2.321.751-3.63.799l-.019.001c-.192.022-.414.034-.639.034-.592 0-1.163-.085-1.703-.244l.043.011c-.483-.154-.9-.393-1.254-.703l.004.003c-.248-.202-.45-.451-.594-.734l-.006-.013q-.15-.4-.025-.475t.175-.025l.25.25c.279.259.612.463.98.593l.02.006c.506.176 1.09.278 1.697.278.195 0 .387-.01.576-.031l-.023.002c1.618-.191 3.077-.743 4.336-1.573l-.037.023c1.064-.633 1.925-1.503 2.531-2.54l.018-.034c.301-.442.481-.988.481-1.576 0-.361-.068-.707-.192-1.025l.007.019c-.374-.591-.979-1.007-1.685-1.122l-.014-.002c-.548-.135-1.178-.213-1.825-.213-.521 0-1.031.05-1.524.146l.05-.008c-1.687.304-3.195.825-4.586 1.541l.091-.043q-6.148 3.1-6.349 6.349v.049c0 .873.343 1.666.902 2.252l-.001-.001c.637.708 1.341 1.333 2.11 1.873l.039.026c.701.524 1.321 1.065 1.898 1.649l.001.002.1.1 3.2-1.749c.365-.528.804-.974 1.308-1.334l.016-.011c.4-.336.908-.555 1.465-.599l.009-.001c.02-.002.043-.002.067-.002.373 0 .693.225.831.547l.002.006c.105.235.166.51.166.799 0 .088-.006.175-.017.261l.001-.01-.097.493.15-.1c.104-.079.235-.126.377-.126.09 0 .175.019.252.053l-.004-.002c.192.05.331.222.331.426 0 .035-.004.069-.012.102l.001-.003-.15.55q-.45 1.799-.599 2.599c-.05.173-.078.372-.078.578 0 .043.001.085.004.127v-.006q.025.3.075.3t.199-.3l.15-.35q.05 0 0 .05l.55-1.15q1.95-4.298 2.099-4.8l.3-.949q.05-.1.4-.199c.237-.064.508-.101.788-.101.023 0 .046 0 .068.001h-.003q.7 0 .7.35l-.05.25c-.112.308-.223.693-.309 1.087l-.011.063c-.02.129-.032.277-.032.429 0 .202.02.399.059.59l-.003-.019.05.199c.102.417.257.783.46 1.117l-.01-.017q.599-.999 1.15-2.049c.29-.483.56-1.043.777-1.629l.023-.07c.075-.377.161-.695.266-1.005l-.016.056q.05-.15.427-.225c.238-.048.511-.075.79-.075h.036-.002q.7 0 .747.35l-.1.199c-.119.336-.223.74-.293 1.155l-.006.045c-.009.097-.015.209-.015.323 0 .239.024.473.069.699l-.004-.023v.199c.115.436.286.819.51 1.166l-.01-.016.15.35c.835-.41 1.817-.65 2.855-.65h.039-.002zm-21.439 7.253c.695-.718 1.124-1.698 1.124-2.778 0-.417-.064-.819-.182-1.197l.008.028-.8.5c-.816.465-1.522.984-2.161 1.574l.008-.007c-.485.446-.843 1.023-1.019 1.674l-.006.025q-.225.925.225 1.2c.183.084.398.133.623.133.246 0 .479-.058.684-.162l-.009.004c.594-.216 1.097-.559 1.497-.998l.003-.003zm6.697-4.604q.25-.65.55-1.55.4-1.2.275-1.399t-.475-.05c-.278.135-.511.32-.697.547l-.003.004c-.208.263-.406.557-.582.866l-.018.034c-.202.331-.373.712-.492 1.116l-.009.034c-.193.523-.305 1.128-.305 1.758 0 .085.002.169.006.253v-.012q.05.999.32 1.075t.625-.725c.229-.413.433-.893.585-1.396l.014-.054q.149-.354.204-.501zm5.546 2.65c.693-.311 1.181-.966 1.249-1.741l.001-.008v-.05l-.55.7-.999 1.1c-.015.012-.025.03-.025.05 0 .02.01.038.024.05q.048.049.3-.1zm4.299-.95c.756-.216 1.3-.901 1.3-1.712 0-.013 0-.026 0-.039v.002c-.01-.2-.046-.388-.105-.566l.004.015c-.389.346-.708.76-.939 1.227l-.011.023q-.451.899-.252 1.048z"></path>
                        </svg>
                    </li>
                    <li className='skills-list-name' data-name="JavaScript">
                        <svg viewBox="-9 -7 65 65" id="javascript">
                            <path fill='#E2E8F0' d="M6.8 6.8v34.4h34.4V6.8Zm18.73 25.79c0 4.23-2.05 5.64-5.09 5.64a7.65 7.65 0 0 1-2.34-.37l.34-2.26a5.19 5.19 0 0 0 1.72.28c1.6 0 2.57-.72 2.57-3.38v-9.84h2.8Zm6.52 5.62a9 9 0 0 1-4.14-1l.62-2.32a7.76 7.76 0 0 0 3.7 1C34 35.9 35 35.06 35 33.81s-.76-1.81-2.7-2.54c-2.53-.9-4.14-2.26-4.14-4.45 0-2.51 2.09-4.4 5.42-4.4a8.06 8.06 0 0 1 3.67.76l-.67 2.25a6.63 6.63 0 0 0-3.06-.72c-1.78 0-2.53.94-2.53 1.84 0 1.18.89 1.73 2.93 2.51 2.66 1 3.94 2.35 3.94 4.55 0 2.47-1.86 4.6-5.81 4.6Z"></path>
                        </svg>
                    </li>
                    <li className='skills-list-name' data-name="React">
                        <svg viewBox="-8 -8 40 40" id="react">
                        <path fill='#E2E8F0' d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z"></path>
                        </svg>
                    </li>
                    <li className='skills-list-name' data-name="PHP">
                        <svg viewBox="-2 -3 28 28" id="php">
                        <path fill='#E2E8F0' d="m12 5.601c-.035 0-.076 0-.116 0-1.61 0-3.18.175-4.69.507l.144-.027c-1.442.303-2.718.751-3.91 1.343l.094-.042c-1.011.487-1.867 1.139-2.57 1.93l-.007.008c-.571.624-.927 1.453-.945 2.364v.004c.019.914.374 1.741.946 2.367l-.002-.003c.71.799 1.566 1.451 2.529 1.917l.048.021c1.098.549 2.374.998 3.71 1.282l.106.019c1.366.305 2.936.48 4.546.48h.123-.006.116c1.61 0 3.18-.175 4.69-.507l-.144.027c1.442-.303 2.718-.751 3.91-1.343l-.094.042c1.011-.487 1.867-1.139 2.57-1.93l.007-.008c.571-.624.927-1.453.945-2.364v-.004c-.018-.915-.374-1.744-.947-2.371l.002.003c-.71-.799-1.566-1.451-2.529-1.917l-.048-.021c-1.098-.549-2.374-.998-3.71-1.282l-.106-.019c-1.366-.305-2.936-.48-4.546-.48-.041 0-.082 0-.123 0h.006zm-3.12 7.264c-.131.119-.28.221-.442.301l-.011.005c-.141.068-.308.131-.482.179l-.021.005c-.172.062-.371.099-.579.099-.008 0-.016 0-.024 0h.001-1.972l-.32 1.963h-1.447l1.28-6.675h2.773c.018 0 .04-.001.062-.001.36 0 .706.063 1.026.179l-.021-.007c.295.108.546.276.748.489l.001.001c.175.223.3.493.354.789l.002.011c.025.146.04.314.04.486 0 .196-.019.387-.055.573l.003-.019c-.036.179-.083.335-.142.485l.007-.019q-.086.221-.184.417-.122.196-.27.393c-.096.129-.201.242-.317.343l-.003.002zm4.172.589.565-2.822c.024-.107.038-.229.038-.355 0-.026-.001-.052-.002-.078v.004c-.001-.109-.043-.208-.111-.283-.069-.06-.151-.106-.241-.134l-.005-.001c-.125-.04-.269-.062-.418-.062-.017 0-.034 0-.051.001h.002-1.126l-.736 3.73h-1.423l1.28-6.48h1.423l-.343 1.767h1.28c.022 0 .047-.001.073-.001.331 0 .653.041.961.117l-.027-.006c.249.055.466.172.641.332l-.001-.001c.156.123.267.298.306.498l.001.005c.014.089.022.191.022.295 0 .17-.021.335-.062.492l.003-.014-.589 2.994zm7.902-2.184c-.04.181-.082.328-.132.473l.009-.031c-.054.159-.12.297-.201.425l.005-.008c-.069.155-.151.288-.248.408l.003-.004c-.098.122-.203.23-.317.329l-.003.003c-.131.119-.28.221-.442.301l-.011.005c-.141.068-.308.131-.482.179l-.021.005c-.172.062-.371.099-.579.099-.008 0-.016 0-.024 0h.001-1.972l-.343 1.959h-1.423l1.28-6.675h2.749c.022-.001.047-.001.073-.001.365 0 .716.063 1.041.18l-.022-.007c.287.104.529.272.718.488l.002.002c.19.222.325.497.378.799l.002.01c.022.131.035.281.035.435 0 .221-.026.435-.075.641l.004-.019zm-2.7-1.547h-.978l-.513 2.749h.856.052c.25 0 .496-.023.734-.066l-.025.004c.204-.036.386-.109.546-.212l-.006.003c.136-.122.25-.263.339-.421l.004-.008c.103-.188.18-.407.219-.638l.002-.012c.031-.129.048-.278.048-.431 0-.074-.004-.147-.012-.218l.001.009c-.014-.158-.072-.301-.161-.419l.001.002c-.116-.108-.255-.192-.409-.243l-.008-.002c-.186-.062-.399-.097-.621-.097-.023 0-.046 0-.068.001h.003zm-11.19 0h-.978l-.515 2.749h.858.052c.25 0 .496-.023.734-.066l-.025.004c.204-.036.386-.109.546-.212l-.006.003c.136-.122.25-.263.339-.421l.004-.008c.103-.188.18-.407.219-.638l.002-.012c.031-.129.048-.278.048-.431 0-.074-.004-.147-.012-.218l.001.009c-.014-.158-.072-.301-.161-.419l.001.002c-.116-.108-.255-.192-.409-.243l-.008-.002c-.186-.062-.399-.097-.621-.097-.023 0-.046 0-.068.001h.003z"></path>
                        </svg>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Home;
