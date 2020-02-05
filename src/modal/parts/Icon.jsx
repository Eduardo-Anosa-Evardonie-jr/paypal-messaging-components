/** @jsx h */
/* eslint-disable react/no-unknown-property, eslint-comments/disable-enable-pair */
import { h } from 'preact';

const Icon = ({ name, color }) => {
    switch (name) {
        case 'logo':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204.12 68.53">
                    <path
                        fill={color || '#009cde'}
                        fill-opacity={color ? '0.7' : '1'}
                        d="M52.34 17.41c.84-5.33 0-9-2.89-12.24C46.27 1.55 40.54 0 33.2 0H11.9a3 3 0 00-3 2.57L0 58.81a1.83 1.83 0 001.81 2.11H15l-.91 5.76a1.6 1.6 0 001.58 1.85h11.06a2.67 2.67 0 002.63-2.25l.11-.56 2.09-13.24.13-.73a2.67 2.67 0 012.63-2.25H36c10.74 0 19.15-4.36 21.6-17 1-5.27.5-9.67-2.22-12.77a10.56 10.56 0 00-3-2.34"
                    />
                    <path
                        fill={color || '#012169'}
                        fill-opacity={color ? '0.7' : '1'}
                        d="M52.34 17.41c.84-5.33 0-9-2.89-12.24C46.27 1.55 40.54 0 33.2 0H11.9a3 3 0 00-3 2.57L0 58.81a1.83 1.83 0 001.81 2.11H15L18.28 40l-.1.66a3 3 0 013-2.57h6.25c12.27 0 21.88-5 24.69-19.41.08-.43.15-.84.22-1.25"
                    />
                    <path
                        fill={color || '#003087'}
                        d="M21.83 17.48a2.66 2.66 0 012.63-2.25h16.7a34.81 34.81 0 015.51.4q.72.12 1.41.27t1.33.34l.63.2a15.06 15.06 0 012.31 1c.84-5.33 0-9-2.89-12.24C46.27 1.55 40.54 0 33.2 0H11.9a3 3 0 00-3 2.57L0 58.81a1.83 1.83 0 001.81 2.11H15L18.28 40zm121.96 17.74a1.11 1.11 0 011.1-.94h10.27c8.48 0 14.41 6.66 13.08 15.22a18.65 18.65 0 01-17.88 15.22h-10.47a.65.65 0 01-.64-.75zM148.1 58h1.78c4.72 0 9.12-2.56 10.12-8.5.85-5.45-2.26-8.52-7.35-8.52h-1.3a.65.65 0 00-.64.55zm-17.61-16.08l-.66 4.15H138a.65.65 0 01.64.75l-.79 5a1.11 1.11 0 01-1.1.94h-7a1.11 1.11 0 00-1.1.93l-.7 4.32h8.65a.65.65 0 01.64.75l-.79 5a1.11 1.11 0 01-1.1.94h-15.63a.65.65 0 01-.64-.75l4.54-28.76a1.11 1.11 0 011.1-.94h15.61a.65.65 0 01.67.75l-.79 5a1.11 1.11 0 01-1.1.94h-7.51a1.11 1.11 0 00-1.11.98zm44.66 22.81h-6.21a.65.65 0 01-.64-.75l4.54-28.76a1.11 1.11 0 011.1-.94h6.21a.65.65 0 01.64.75l-4.54 28.76a1.11 1.11 0 01-1.1.94zm-58.23 0h-8.13a.9.9 0 01-.81-.51L102.61 53h-.08l-1.74 11a.9.9 0 01-.89.76h-6.38a.65.65 0 01-.64-.75L97.45 35a.9.9 0 01.89-.76h11.06c6 0 10.13 2.87 9.12 9.37a10 10 0 01-8 8.6l7 11.49a.65.65 0 01-.6 1.03zm-13.58-16.8h.77c2.58 0 5.56-.49 6.1-3.8s-1.18-3.79-3.94-3.8h-1.12a.69.69 0 00-.68.58zm88.59 16.8h-6.21a.65.65 0 01-.64-.75l3.64-23h-5.78a.65.65 0 01-.64-.75l.79-5a1.11 1.11 0 011.1-.94h19.29a.65.65 0 01.64.75l-.79 5a1.11 1.11 0 01-1.1.94h-5.59L193 63.79a1.11 1.11 0 01-1.07.94zm-98.65-21.8a.69.69 0 01-1.18.36 7.6 7.6 0 00-5.49-2.12 9.73 9.73 0 00-9.44 8.43c-.73 4.8 2 8.27 6.94 8.27a10.48 10.48 0 006-2.06.69.69 0 011.07.67l-1.13 7a1.09 1.09 0 01-.77.87 22.07 22.07 0 01-6.52 1.22c-13.12 0-15.22-11.21-14.54-16C70.09 36.2 80.94 33.14 87.58 33.5a19.55 19.55 0 015.94 1.11 1.36 1.36 0 01.87 1.49z"
                    />
                    <path
                        fill={color || '#009cde'}
                        d="M132.7 3.81h-6.85a1 1 0 00-.94.8l-2.77 17.58a.57.57 0 00.56.66h3.52a.67.67 0 00.66-.56l.79-5a1 1 0 01.94-.8h2.17c4.52 0 7.12-2.18 7.8-6.52a5.28 5.28 0 00-.87-4.42c-.99-1.14-2.71-1.74-5.01-1.74zm.79 6.42c-.37 2.46-2.25 2.46-4.07 2.46h-1l.73-4.59a.57.57 0 01.56-.48h.47c1.24 0 2.41 0 3 .7a2.29 2.29 0 01.31 1.91z"
                    />
                    <path
                        fill={color || '#003087'}
                        d="M83.81 3.81H77a1 1 0 00-.94.8l-2.82 17.58a.57.57 0 00.56.66h3.27A1 1 0 0078 22l.75-4.74a1 1 0 01.94-.8h2.17c4.52 0 7.12-2.18 7.8-6.52a5.28 5.28 0 00-.87-4.42c-.96-1.11-2.69-1.71-4.98-1.71zm.79 6.42c-.37 2.46-2.25 2.46-4.07 2.46h-1l.73-4.59a.57.57 0 01.56-.48h.47c1.24 0 2.41 0 3 .7a2.29 2.29 0 01.31 1.91zm19.7-.08H101a.57.57 0 00-.56.48l-.14.92-.23-.33c-.71-1-2.3-1.38-3.88-1.38a7.55 7.55 0 00-7.33 6.6 6.2 6.2 0 001.22 5 5.14 5.14 0 004.13 1.67 6.28 6.28 0 004.54-1.88l-.15.91a.57.57 0 00.56.66h3a1 1 0 00.94-.8l1.77-11.24a.57.57 0 00-.57-.61zm-4.57 6.39A3.66 3.66 0 0196 19.67a2.77 2.77 0 01-2.2-.89 2.79 2.79 0 01-.51-2.31A3.67 3.67 0 0197 13.32a2.77 2.77 0 012.19.89 2.83 2.83 0 01.53 2.33z"
                    />
                    <path
                        fill={color || '#009cde'}
                        d="M153.19 10.15h-3.28a.57.57 0 00-.56.48l-.14.92-.23-.33c-.71-1-2.3-1.38-3.88-1.38a7.55 7.55 0 00-7.33 6.6 6.2 6.2 0 001.22 5 5.14 5.14 0 004.13 1.67 6.28 6.28 0 004.54-1.88l-.15.91a.57.57 0 00.56.66h3a1 1 0 00.93-.8l1.77-11.24a.57.57 0 00-.58-.61zm-4.57 6.39a3.66 3.66 0 01-3.7 3.13 2.77 2.77 0 01-2.2-.89 2.79 2.79 0 01-.51-2.31 3.67 3.67 0 013.68-3.16 2.77 2.77 0 012.19.89 2.83 2.83 0 01.53 2.34z"
                    />
                    <path
                        fill={color || '#003087'}
                        d="M121.78 10.15h-3.3a1 1 0 00-.79.42l-4.55 6.7-1.93-6.44a1 1 0 00-.91-.68h-3.24a.57.57 0 00-.54.76l3.63 10.66-3.42 4.82a.57.57 0 00.47.9h3.3a1 1 0 00.78-.41l11-15.83a.57.57 0 00-.5-.9z"
                    />
                    <path
                        fill={color || '#009cde'}
                        d="M157.06 4.29l-2.81 17.9a.57.57 0 00.56.66h2.83a1 1 0 00.94-.8l2.77-17.58a.57.57 0 00-.56-.66h-3.17a.57.57 0 00-.56.48z"
                    />
                </svg>
            );
        case 'logo-de':
            return (
                <svg viewBox="0 0 203 18" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <path id="a" d="M0 .1477h14.987v17.6617H0z" />
                        <path id="c" d="M0 .1477h13.5852v15.7021H0z" />
                        <path id="e" d="M0 .1477h13.5852v15.7021H0z" />
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                        <path
                            d="M56.5942 7.878c-.219 1.4368-1.3176 1.4368-2.3805 1.4368h-.6045l.424-2.6826a.3341.3341 0 01.33-.2815h.2772c.7234 0 1.4068 0 1.759.4116.2109.2463.2744.6113.1948 1.1157m-.4624-3.7484H52.124a.5564.5564 0 00-.55.4693l-1.6207 10.2635a.3339.3339 0 00.33.3859h2.0565a.3897.3897 0 00.385-.3287l.4594-2.9098a.557.557 0 01.5501-.4697h1.268c2.64 0 4.1635-1.2756 4.5617-3.8046.1793-1.106.0072-1.975-.5113-2.5834-.57-.6689-1.58-1.0225-2.9208-1.0225"
                            fill="#009DDC"
                        />
                        <path
                            d="M28.0092 7.878c-.219 1.4368-1.3178 1.4368-2.3804 1.4368h-.6046l.424-2.6826a.3341.3341 0 01.33-.2815h.2772c.7233 0 1.4067 0 1.7589.4116.2107.2463.2745.6113.1949 1.1157m-.4624-3.7484h-4.008a.5569.5569 0 00-.55.4693l-1.6206 10.2635a.334.334 0 00.33.3859h1.9136a.557.557 0 00.5501-.4697l.4372-2.7688a.5569.5569 0 01.55-.4697h1.2683c2.6397 0 4.1634-1.2756 4.5615-3.8046.1792-1.106.0072-1.975-.5112-2.5834-.5701-.6689-1.5802-1.0225-2.921-1.0225M36.851 11.5627c-.1853 1.0952-1.0558 1.8302-2.166 1.8302-.5567 0-1.0023-.1788-1.2887-.5172-.2839-.3357-.3909-.814-.3008-1.3465.173-1.0853 1.0573-1.8443 2.1507-1.8443.545 0 .9874.1807 1.2794.5225.294.3441.4096.8255.3255 1.3553m2.6745-3.7307h-1.919a.3342.3342 0 00-.3302.2817l-.0842.536-.1343-.1942c-.4156-.6026-1.3418-.8037-2.2669-.8037-2.12 0-3.9312 1.6046-4.2837 3.8551-.1835 1.123.077 2.1958.7144 2.9447.5857.6881 1.4213.9745 2.417.9745 1.7089 0 2.6569-1.0965 2.6569-1.0965l-.0857.5327a.3339.3339 0 00.33.3859h1.7282c.274 0 .5073-.199.55-.4694l1.0375-6.5613a.3338.3338 0 00-.33-.3855"
                            fill="#1C3587"
                        />
                        <path
                            d="M65.4361 11.5627c-.1853 1.0952-1.0557 1.8302-2.166 1.8302-.5567 0-1.0023-.1788-1.289-.5172-.2836-.3357-.3906-.814-.3005-1.3465.1729-1.0853 1.0573-1.8443 2.1506-1.8443.545 0 .9875.1807 1.2795.5225.294.3441.4096.8255.3254 1.3553m2.6745-3.7307h-1.919a.3342.3342 0 00-.3302.2817l-.0841.536-.1344-.1942c-.4155-.6026-1.3419-.8037-2.2668-.8037-2.1201 0-3.9313 1.6046-4.2838 3.8551-.1833 1.123.077 2.1958.7144 2.9447.5856.6881 1.4214.9745 2.4171.9745 1.7088 0 2.6568-1.0965 2.6568-1.0965l-.0857.5327a.3339.3339 0 00.33.3859h1.7283c.274 0 .5072-.199.5499-.4694l1.0375-6.5613a.3338.3338 0 00-.33-.3855"
                            fill="#009DDC"
                        />
                        <path
                            d="M49.7469 7.832h-1.929a.5576.5576 0 00-.4608.2438l-2.6608 3.914-1.1277-3.7609a.5567.5567 0 00-.5334-.3968h-1.8961c-.2291 0-.39.2248-.3163.4414l2.124 6.2265-1.9978 2.8152c-.1568.221.0015.5265.2728.5265h1.927a.5572.5572 0 00.4576-.2392l6.415-9.2466c.1534-.2212-.005-.5238-.2745-.5238"
                            fill="#1C3587"
                        />
                        <path
                            d="M70.3727 4.4114l-1.6451 10.4513a.3339.3339 0 00.33.3855h1.6544a.5566.5566 0 00.55-.4694l1.6218-10.2635a.3337.3337 0 00-.33-.3856h-1.8512a.3339.3339 0 00-.33.2817"
                            fill="#009DDC"
                        />
                        <g transform="translate(0 .0323)">
                            <mask id="b" fill="#fff">
                                <use href="#a" />
                            </mask>
                            <path
                                d="M13.506 4.6349c.2157-1.374-.0015-2.3088-.7456-3.1557C11.9412.547 10.4613.1476 8.5676.1476H3.0713a.786.786 0 00-.7767.663L.0058 15.3052c-.045.286.1763.5447.4661.5447h3.3932l-.2341 1.4833a.4123.4123 0 00.4076.4763h2.86a.6876.6876 0 00.6796-.5798l.0281-.1453.5388-3.4123.0347-.1885a.6877.6877 0 01.6794-.58h.4278c2.7709 0 4.9405-1.1241 5.5743-4.3755.265-1.3588.128-2.4927-.5724-3.29-.212-.2412-.4755-.4405-.783-.6031"
                                fill="#009DDC"
                                mask="url(#b)"
                            />
                        </g>
                        <g transform="translate(0 .0323)">
                            <mask id="d" fill="#fff">
                                <use href="#c" />
                            </mask>
                            <path
                                d="M13.506 4.6349c.2157-1.374-.0015-2.3088-.7456-3.1557C11.9412.547 10.4613.1476 8.5676.1476H3.0713a.786.786 0 00-.7767.663L.0058 15.3052c-.045.286.1763.5447.4661.5447h3.3932l.8524-5.398-.0265.1692a.7831.7831 0 01.774-.6629h1.6126c3.1673 0 5.6475-1.2851 6.3721-5.0018a8.7223 8.7223 0 00.0562-.3214"
                                fill="#211D6F"
                                mask="url(#d)"
                            />
                        </g>
                        <g transform="translate(0 .0323)">
                            <mask id="f" fill="#fff">
                                <use href="#e" />
                            </mask>
                            <path
                                d="M5.6331 4.653a.6869.6869 0 01.3826-.5127.6867.6867 0 01.2969-.0672h4.3084c.5104 0 .9863.0332 1.4215.1034.1243.0198.2453.0428.3628.0689a5.0885 5.0885 0 01.505.1382c.2137.0708.4125.1543.5957.2513.2156-1.374-.0016-2.309-.7457-3.1557C11.9413.547 10.4612.1476 8.5677.1476H3.0714a.7861.7861 0 00-.7769.663L.006 15.3052c-.0452.286.1761.5447.466.5447h3.3933l.8524-5.398.9155-5.7988z"
                                fill="#1C3587"
                                mask="url(#f)"
                            />
                        </g>
                        <path
                            d="M92.8857 7.5684h-.0295l-1.7573 3.5394h2.407l-.6202-3.5394zM89.9472 13.32l-1.0103 1.8107a.237.237 0 01-.2068.1212h-2.5344c-.1797 0-.2938-.1917-.2084-.3493L91.77 4.2558a.237.237 0 01.2083-.1238h2.8284a.2371.2371 0 01.2315.1862L97.371 14.965a.2366.2366 0 01-.2315.2871h-2.6a.2364.2364 0 01-.2317-.187L93.934 13.32h-3.9868zM141.9119 7.5684h-.0296l-1.7573 3.5394h2.407l-.6201-3.5394zm-2.9386 5.7517l-1.0103 1.8107a.237.237 0 01-.207.1212h-2.5343c-.1796 0-.2936-.1917-.208-.3493l5.7825-10.6469a.2368.2368 0 01.2082-.1238h2.8285a.2371.2371 0 01.2315.1862l2.3328 10.6467a.2367.2367 0 01-.2315.2871h-2.6001a.2367.2367 0 01-.2318-.187l-.3736-1.7449h-3.9869zM109.384 6.9224l-.241 1.5162h2.9866a.2366.2366 0 01.234.2732l-.2873 1.8319a.406.406 0 01-.4011.343h-2.5702a.4059.4059 0 00-.401.341l-.2549 1.5762h3.1636a.2367.2367 0 01.2341.2732l-.2873 1.832a.4059.4059 0 01-.4011.343h-5.7105a.2366.2366 0 01-.2338-.2735l1.6597-10.504a.4062.4062 0 01.4013-.3425h5.711a.2367.2367 0 01.2342.2732l-.2875 1.832a.4059.4059 0 01-.4011.343h-2.7464c-.2 0-.37.145-.4013.3421M202.6336 9.0432a.2372.2372 0 01.2327.2817c-.2855 1.5023-.6533 2.8076-1.7935 4.1131-1.329 1.5192-3.0714 2.1829-4.9321 2.1829-3.4998 0-5.5524-2.3745-5.006-5.8698.5758-3.6132 3.3966-5.9878 6.9846-5.9878 2.2078 0 3.7834.9605 4.4623 2.8945a.2374.2374 0 01-.1371.2994l-2.4684.9712c-.1272.05-.2715-.017-.312-.1475-.2882-.9245-.987-1.5252-2.0615-1.5252-1.9049 0-3.1897 1.8141-3.4554 3.5101-.2806 1.7256.4873 3.4806 2.3923 3.4806 1.255 0 2.3183-.649 2.6285-1.932h-2.0844a.2367.2367 0 01-.2338-.2745l.2924-1.798a.2368.2368 0 01.2338-.1987h5.2576zM155.424 8.4238l.6252-3.9494a.4058.4058 0 01.4012-.3422h2.2699a.2368.2368 0 01.2341.2734l-1.66 10.504a.406.406 0 01-.4013.3426h-2.2696a.2367.2367 0 01-.234-.2738l.68-4.2835h-4.1789l-.6693 4.215a.4061.4061 0 01-.4011.3423h-2.2703a.2368.2368 0 01-.234-.2736l1.66-10.504a.4059.4059 0 01.4013-.3424h2.2698a.2367.2367 0 01.234.2734l-.6359 4.0182h4.1789zM162.5605 12.8038h3.1935a.2369.2369 0 01.234.2735l-.2872 1.8318a.406.406 0 01-.4015.343h-5.7396a.2367.2367 0 01-.2342-.2735l1.66-10.504a.4061.4061 0 01.4012-.3426h2.2699c.1457 0 .2569.1301.234.2737l-1.33 8.3981zM115.1249 4.1321h2.4153a.237.237 0 01.2014.112l4.1538 6.6868h.0296l1.0238-6.4566a.4059.4059 0 01.4011-.3422h2.2701a.2367.2367 0 01.234.2736l-1.6598 10.504a.4063.4063 0 01-.4014.3424h-2.415a.2363.2363 0 01-.2014-.112l-4.154-6.7017h-.0296l-1.0237 6.4714a.4065.4065 0 01-.4013.3423h-2.27a.2367.2367 0 01-.234-.2736l1.6598-10.504a.4062.4062 0 01.4013-.3424M179.9399 4.1321h2.4153a.237.237 0 01.2014.112l4.1538 6.6868h.0296l1.0238-6.4566a.4058.4058 0 01.401-.3422h2.2702a.2367.2367 0 01.234.2736l-1.6598 10.504a.4065.4065 0 01-.4014.3424h-2.415a.2368.2368 0 01-.2016-.112l-4.1539-6.7017h-.0295l-1.0237 6.4714a.4065.4065 0 01-.4013.3423h-2.27a.2367.2367 0 01-.234-.2736l1.6598-10.504a.406.406 0 01.4013-.3424M80.0677 9.1169h.2806c.9451 0 2.0324-.1777 2.23-1.3863.1974-1.209-.4332-1.3826-1.443-1.3862h-.4101a.2513.2513 0 00-.2483.2115l-.4092 2.561zm4.9684 6.1351h-2.9746a.3286.3286 0 01-.2963-.1864l-1.9634-4.0904h-.0295l-.6351 3.9998a.3288.3288 0 01-.325.277h-2.336a.2366.2366 0 01-.2342-.2734l1.6703-10.5692a.3285.3285 0 01.3248-.2772h4.0456c2.2004 0 3.7066 1.047 3.3373 3.4214-.2509 1.5338-1.3142 2.861-2.9385 3.1413l2.557 4.1975c.096.1576-.0176.3596-.2024.3596zM101.0372 15.252h-2.27a.2368.2368 0 01-.2339-.2735l1.3299-8.3982h-2.1154a.2367.2367 0 01-.234-.2733l.2873-1.832a.4061.4061 0 01.4015-.3429h7.0542a.2368.2368 0 01.2342.2733l-.2875 1.832a.406.406 0 01-.4013.3429h-2.0446l-1.319 8.3296a.4063.4063 0 01-.4014.3422M177.9214 4.1321a.2368.2368 0 01.2342.2736l-.9462 5.9795c-.2216 1.4306-.502 2.8465-1.7867 3.923-1.078.9144-2.5844 1.239-3.8838 1.239-1.2994 0-2.7172-.3246-3.4996-1.239-.9304-1.0765-.768-2.4924-.5464-3.923l.935-5.9107a.4061.4061 0 01.4012-.3424h2.2706a.2368.2368 0 01.2342.273l-.8729 5.5819c-.2363 1.4454-.384 3.0234 1.4767 3.0234 1.8605 0 2.215-1.578 2.4513-3.0234l.8619-5.5118a.4059.4059 0 01.4011-.343h2.2694zM134.647 13.0772l-.2874 1.832a.406.406 0 01-.4013.343h-8.712c-.1964 0-.3075-.2248-.1881-.3805l6.3533-8.2914h-4.0938a.2367.2367 0 01-.2342-.2732l.2873-1.832a.406.406 0 01.4013-.343h8.3886c.196 0 .3073.2242.1884.38l-6.3256 8.2917h4.3894a.2367.2367 0 01.234.2734"
                            fill="#1C3587"
                        />
                    </g>
                </svg>
            );
        case 'caret':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                    <path
                        fill="none"
                        fill-rule="evenodd"
                        stroke={color || '#199DDB'}
                        stroke-linecap="round"
                        d="M2.352 5.19l4.474 5.184c.096.111.252.111.348 0l4.474-5.184"
                    />
                </svg>
            );
        case 'close':
            return (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 0L0 12"
                        transform="translate(12 12)"
                        stroke={color || '#2C2E2F'}
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                    <path
                        d="M0 0L12 12"
                        transform="translate(12 12)"
                        stroke={color || '#2C2E2F'}
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                </svg>
            );
        case 'info':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                    <path
                        fill="none"
                        fill-rule="evenodd"
                        stroke={color || '#9DA3A6'}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.526 10.474v7.579c4.71-.034 8.527-3.817 8.527-8.527a8.526 8.526 0 1 0-11.834 7.862"
                    />
                </svg>
            );
        case 'rocket':
            return (
                <svg viewBox="0 0 110 118" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <path
                            d="M82.72 56.25c3.0376 0 5.5-2.4624 5.5-5.5s-2.4624-5.5-5.5-5.5-5.5 2.4624-5.5 5.5 2.4624 5.5 5.5 5.5h0zm0 5c-5.799 0-10.5-4.701-10.5-10.5s4.701-10.5 10.5-10.5 10.5 4.701 10.5 10.5-4.701 10.5-10.5 10.5zm-35.31 42.49l-10.69 10.7c-2.45 2.45-6.15-1.22-3.69-3.68l10.69-10.7c2.5-2.45 6.15 1.19 3.69 3.68zm-14-14l-10.69 10.7c-2.46 2.45-6.15-1.22-3.69-3.68l10.69-10.7c2.5-2.45 6.15 1.19 3.69 3.68zm3 10.84l-14.84 14.89c-2.37 2.37-5.94-1.18-3.57-3.55l14.87-14.89c2.35-2.37 5.94 1.22 3.57 3.55h-.03zm-5-32.78c-.7933.74-1.5633 1.5-2.31 2.28a20.53 20.53 0 0111.32 2.31c.56.3 1.06.6 1.51.9a110.32 110.32 0 017.12-12.91c-6.22-.36-12.16 2.42-17.64 7.42zm40.68 17l-.29.18a112.36 112.36 0 01-12.58 6.92c.3.47.61 1 .91 1.59a21.63 21.63 0 012.31 11.62c.77-.74 1.53-1.53 2.26-2.35 4.9-5.58 7.67-11.61 7.39-17.94v-.02zm32.69-59.55a2.51 2.51 0 011.3.4l1 .65a2.53 2.53 0 011.14 2.09v.05a48.78 48.78 0 01-2.17 13.27 70.55 70.55 0 01-15.07 27.08 85.84 85.84 0 01-14.11 12.77c1.5 9-1.9 17.28-8.41 24.62a49.55 49.55 0 01-5.87 5.61c-1.21 1-2.16 1.66-2.74 2a2.56 2.56 0 01-3.8-3c2.05-6.09 1.55-11-.48-15a12.55 12.55 0 00-1.15-1.85c-1.7067.72-3.46 1.4133-5.26 2.08a2.52 2.52 0 01-2.68-.59L42.8 91.7l-1.15-1.14-3.69-3.73a2.56 2.56 0 01-.58-2.58c.78-2.14 1.6-4.21 2.45-6.23a12.92 12.92 0 00-1.74-1.09c-3.81-2-8.63-2.54-14.54-.48a2.53 2.53 0 01-2.92-3.78 33.36 33.36 0 012-2.75 49.46 49.46 0 015.45-5.87c7.22-6.59 15.4-10 24.24-8.36a84.65 84.65 0 0112.31-13.6 68.88 68.88 0 0126.59-14.74 48.6 48.6 0 0113.45-2.1h.11zm-1.56 5a47 47 0 00-10.41 1.87 63.24 63.24 0 00-24.48 13.59c-10.19 8.95-18.74 21.54-25.11 38.3h0l2.52 2.55 1.13 1.13 2.53 2.56c16.57-6.41 29.06-15 38.05-25.14a65 65 0 0013.91-25 49.56 49.56 0 001.86-9.54h0z"
                            stroke="#FFF"
                            stroke-width="2.5"
                            fill={color || '#0070ba'}
                        />
                        <path
                            d="M7.31 79.83a9.07 9.07 0 00-6.09-2.58 8.8 8.8 0 006.06-2.33 7.12 7.12 0 002.59-5.44 7.46 7.46 0 002.89 5.44 8.8 8.8 0 006.09 2.33 9.07 9.07 0 00-6.06 2.59 7.48 7.48 0 00-2.89 5.41 7.09 7.09 0 00-2.59-5.42zM55.92 21.16c-2.59-2.59-5.62-4.32-9.08-4.32a12.49 12.49 0 009.08-3.89c2.59-2.61 3.89-8.25 3.89-11.7 0 3.46 1.75 9.13 4.33 11.7a12.53 12.53 0 009.08 3.89c-3.46 0-6.49 1.73-9.09 4.32-2.6 2.59-4.33 8.23-4.33 11.7.01-3.47-1.29-9.12-3.88-11.7z"
                            stroke={color || '#0070ba'}
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M97.27 90.81v18.44m9.23-9.22H88.03"
                            stroke={color || '#0070ba'}
                            stroke-width="2.5"
                            stroke-linecap="round"
                        />
                    </g>
                </svg>
            );
        case 'card':
            return (
                <svg width="41" height="35" xmlns="http://www.w3.org/2000/svg">
                    <g
                        transform="translate(.8478 .86)"
                        stroke={color || '#2C2E2F'}
                        stroke-width="1.5"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        <path
                            d="M35.6922 10.88l-1.85-6.9a2.62 2.62 0 00-3.22-1.84l-5.68 1.52M36.9822 15.7l1.6 6c.2704 1.3442-.5969 2.654-1.94 2.93l-16.72 4.51M12.9822 30.95l-5 1.34c-1.297.4152-2.687-.2887-3.12-1.58l-4.81-18c-.2773-1.3335.5772-2.6397 1.91-2.92l13.55-3.65M37.4622 17.51l-1.77-6.63"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.9022 17.1l-.54-2.01-5.61 1.5 1.07 4.02 5.62-1.51-.21-.8"
                        />
                        <circle cx="22.8822" cy="10.44" r="1.04" />
                        <circle cx="27.1522" cy="21.56" r="1.04" />
                        <circle cx="15.1622" cy="21.76" r="1.04" />
                        <path d="M23.8922 10.18l3.01-.81 4.83 2.79 4.22-1.13M28.1822 21.28l3.61-.97 2.06-3.56 3.21-.86M37.0322 15.9l-20.86 5.59" />
                        <path
                            d="M14.3322 31.59a2 2 0 00-1.38-.65 1.9 1.9 0 001.38-.6 1.88 1.88 0 00.58-1.37 2 2 0 00.66 1.37 1.86 1.86 0 001.38.6 2.28 2.28 0 00-2 2 1.88 1.88 0 00-.62-1.35h0zM21.3622 4.56a3.43 3.43 0 00-2.41-1.15 3.33 3.33 0 002.41-1 3.35 3.35 0 001-2.41 3.43 3.43 0 001.15 2.41 3.33 3.33 0 002.41 1 3.43 3.43 0 00-2.41 1.15 3.43 3.43 0 00-1.15 2.41 3.33 3.33 0 00-1-2.41h0z"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                </svg>
            );
        case 'shield':
            return (
                <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg">
                    <g fill={color || '#2C2E2F'} fill-rule="nonzero">
                        <path d="M18.329.974l.0266.001a1.0596 1.0596 0 01.17.0231c.0198.0047.0392.0095.0584.0149a.8913.8913 0 01.0611.019c.0171.006.0342.0124.051.0193a1.0499 1.0499 0 01.2388.1356l-.0825-.0567c.0215.0132.0425.0272.0631.042l.0194.0147c.1573.1186.4812.3412.9564.6335.8037.4944 1.7288.9904 2.7594 1.4538 3.7508 1.6865 7.8241 2.494 12.003 1.9478.617-.0807 1.17.3855 1.1952 1.0072.0014.0347.003.087.0046.1655.0286 1.357-.0538 3.2343-.34 5.4507-.441 3.4138-1.2745 6.7973-2.5986 9.9698-2.794 6.694-7.4309 11.6628-14.259 14.1186a1.0785 1.0785 0 01-.1947.05 1.0578 1.0578 0 01-.328-.0002 1.0583 1.0583 0 01-.194-.0498l.082.0258a1.0625 1.0625 0 01-.045-.0133l-.037-.0125C11.1107 33.478 6.4736 28.509 3.6797 21.8152c-1.3239-3.1721-2.1573-6.5554-2.598-9.9688C.7952 9.63.713 7.7524.7415 6.395a9.2815 9.2815 0 01.0047-.166c.0251-.6216.5783-1.0877 1.1952-1.007 4.1788.5463 8.2521-.2613 12.003-1.9478 1.0306-.4634 1.9556-.9594 2.7594-1.4538.4751-.2923.799-.515.9563-.6335a1.078 1.078 0 01.1788-.1091 1.0667 1.0667 0 01.1724-.0651 1.3366 1.3366 0 01.1113-.0248A1.3315 1.3315 0 0118.1805.98a.9228.9228 0 01.0583-.005 1.1562 1.1562 0 01.0591-.0016l.0311.0005zm-.0326 2.3432l-.1117.0738c-.114.073-.2378.151-.3713.233-.8785.5405-1.8833 1.0792-3.0005 1.5816-3.729 1.6767-7.7674 2.5585-11.9512 2.2397.005.2305.0132.4798.025.7468.046 1.0526.1407 2.188.295 3.383.4182 3.2382 1.2073 6.4416 2.4522 9.4245 2.5797 6.1809 6.8011 10.7043 13.022 12.9415l-.3573-.1327c6.024-2.2804 10.1322-6.7477 12.662-12.8089 1.2451-2.9831 2.0344-6.187 2.4527-9.4254.1543-1.195.249-2.3305.2952-3.383.0117-.2666.0198-.5156.025-.7458-4.1839.3188-8.2223-.563-11.9512-2.2397-1.1173-.5024-2.122-1.0411-3.0005-1.5815a22.3086 22.3086 0 01-.4854-.3069z" />
                        <path d="M12.5732 17.8255c-.3642-.4575-1.0303-.5332-1.4878-.169-.4576.3641-.5333 1.0302-.1691 1.4878l3.615 4.5422c.3983.5004 1.146.5362 1.5902.076l9.9408-10.2952c.4062-.4207.3945-1.091-.0262-1.4972-.4207-.4062-1.091-.3945-1.4972.0262l-9.1023 9.427-2.8634-3.5978z" />
                    </g>
                </svg>
            );
        case 'monogram':
            return (
                <svg width="30" height="36" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.813 29.4585l2.4015-.1327c.54-.0299 1.0019.3837 1.0317.9236.0299.54-.3837 1.0019-.9236 1.0317l-2.6593.1455c-.6486 0-1.0216-.0841-1.4132-.5513-.347-.414-.4983-.9017-.4151-1.4441L5.0383 2.5984c.1923-1.2516 1.087-1.681 2.3989-1.681h10.0954c.3477 0 .6434-.0057 1.2144-.0209 2.0567-.0545 2.833-.0137 3.8133.3343 3.3266 1.1842 5.5425 3.9664 5.1297 8.2394-.015.1174-.0328.2522-.0529.3991 2.1076 1.9016 2.6187 3.968 2.0289 7.055-1.097 5.76-4.7084 8.6078-10.8128 8.6078h-.7854c-.204 0-.5933.4492-.6676.9172l-1.1104 7.4041c-.1495.9893-.7903 2.063-1.8225 2.063H9.214c-.5852 0-.7856-.2529-.977-.6786-.0433-.0965-.0755-.1885-.116-.3193.054.176-.0407-.1086.0613.0049-.2913-.3515-.3561-1.151-.2958-1.5693L9.8983 20.389l.0566-.1654c.3073-.7802 1.0328-1.3698 1.8786-1.3698h2.9614c6.0463 0 9.479-2.3413 10.6147-7.4182l.015-.0797c.0285-.1542.0585-.3285.0894-.5193-.7325-.2711-1.8329-.4087-3.285-.4087h-8.3904c-.4126 0-.4462.021-.4423-.011l-1.025 5.1721c-.1051.5305-.6204.8753-1.1508.7701-.5305-.105-.8753-.6203-.7702-1.1508.3497-1.7645.3497-1.7645 1.0175-5.129.1563-1.0275 1.0885-1.6097 2.3708-1.6097h8.3905c1.4251 0 2.5992.1141 3.544.3888.1517-3.0222-1.4256-4.9126-3.8688-5.7823-.6632-.2355-1.3098-.2695-3.1054-.2218-.5875.0155-.8962.0215-1.2663.0215H7.4372c-.4637 0-.46-.0018-.4638.0229l-4.1605 26.56zm11.9819-8.6465h-2.9614c.0322 0-.0235.0453-.0387.08l.0001-.0443-1.9713 12.7932c.0056-.0335.0087.0824.0158.1769-.003-.0455-.0002.0314-.1476-.1422.0848.1004.1315.18.1733.2824h4.3381c.0741-.131.136-.303.1501-.396l1.1115-7.4114c.2114-1.3317 1.2905-2.5768 2.603-2.5768h.7854c5.183 0 7.9717-2.1992 8.8891-7.0163.361-1.8895.2474-3.1386-.5288-4.2511-1.4705 5.7465-5.6933 8.5056-12.4186 8.5056zm-5.581 13.146h.6389c-.0754-.0945-.1909 0-.639 0z"
                        fill={color || '#2C2E2F'}
                        fill-rule="nonzero"
                    />
                </svg>
            );
        case 'cart':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149 99">
                    <g
                        stroke-width="3"
                        stroke={color || '#0070ba'}
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                    >
                        <path
                            d="M91.59 14h45.56M98.8 7.33V2m30.06 5.33V2M90.4 25.6V6.42c.0054-.9659.7842-1.7491 1.75-1.76h43.36c.9658.0109 1.7446.7941 1.75 1.76V26m-9.34 17h-38"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M28.26 85h62.79M44.37 65c5.38 13.83-17.76 20.42-17.76 20.42m5.89.58l.11 5.17c0 3.1756-2.5744 5.75-5.75 5.75s-5.75-2.5744-5.75-5.75 2.5744-5.75 5.75-5.75M90.75 85c2.3374-.008 4.4487 1.3948 5.347 3.5527.8982 2.158.4058 4.6445-1.247 6.2973s-4.1394 2.1452-6.2973 1.247c-2.158-.8983-3.5608-3.0096-3.5527-5.347M94.05 26l-65.44-3.58m-1.88-2.66l18 45.95c1.37 3.4 2.21 4.65 8.46 4.65H98.5l9.58-44.62m-81.35-6.2c-1.9-5-9.73-4.17-9.73 1.1M8.05 73.36A9 9 0 002 70.77a8.76 8.76 0 006.05-2.33 7.13 7.13 0 002.6-5.44 7.45 7.45 0 002.88 5.44 8.84 8.84 0 006.07 2.33 9.11 9.11 0 00-6.07 2.59 7.46 7.46 0 00-2.88 5.44 7.1 7.1 0 00-2.6-5.44h0zM134.28 39.51a9.81 9.81 0 00-6.88-3.28 9.45 9.45 0 006.88-2.95c2-2 3-6.26 3-8.88 0 2.63 1.33 6.93 3.28 8.88a9.48 9.48 0 006.84 2.95 9.85 9.85 0 00-6.89 3.28c-2 2-3.28 6.26-3.28 8.89 0-2.63-.99-6.92-2.95-8.89z"
                            stroke-linejoin="round"
                        />
                        <path d="M114.05 78.56V97M123.29 87.78h-18.48" />
                    </g>
                </svg>
            );
        case 'calendar':
            return (
                <svg width="31" height="29" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24.0417 4.25H6.9606v.8542a.8542.8542 0 01-1.7084 0V4.25H2.689c-.4679 0-.8542.3863-.8542.8542V9.375h28.1875a.8542.8542 0 01.8542.8542v15.375c0 1.4113-1.1512 2.5625-2.5625 2.5625H2.6889c-1.4114 0-2.5625-1.1512-2.5625-2.5625v-20.5c0-1.4114 1.1511-2.5625 2.5625-2.5625h2.5633v-.8542a.8543.8543 0 01.8542-.8543.8543.8543 0 01.8542.8543v.8542h17.081v-.8544a.8542.8542 0 111.7084 0v.8544h2.5639c1.4113 0 2.5625 1.1511 2.5625 2.5625a.8542.8542 0 01-1.7084 0c0-.4679-.3863-.8542-.8541-.8542H25.75v.854a.8542.8542 0 11-1.7083 0V4.25zm-22.207 6.8333v14.5209c0 .4678.3863.8541.8542.8541h25.625c.4678 0 .8541-.3863.8541-.8541V11.0833H1.8347zm7.6861 11.9582c-.1196 0-.222-.017-.3246-.0683-.1024-.036-.205-.1042-.2733-.188-.1708-.1537-.2562-.3758-.2562-.5979 0-.222.0854-.4441.2562-.5996.0684-.0837.1708-.152.2733-.1862.3076-.1367.7005-.0513.9226.1862.1708.1555.2562.3775.2562.5996 0 .2221-.0854.4442-.2562.598-.1538.1708-.3759.2562-.598.2562zm0-3.4167c-.1196 0-.222-.017-.3246-.0683-.1024-.0359-.205-.1042-.2733-.188-.0854-.0683-.1537-.1708-.1879-.275-.0512-.1008-.0683-.205-.0683-.3228 0-.2221.0854-.4442.2562-.5997.2392-.2374.598-.3228.9225-.1862.1025.0342.205.1025.2734.1862.1708.1555.2562.3776.2562.5997 0 .1178-.017.222-.0683.3228-.0342.1042-.1025.2067-.188.275-.0683.0838-.1708.1521-.2733.188-.1025.0512-.205.0683-.3246.0683zm5.125 3.4167c-.1196 0-.222-.017-.3246-.0683-.1024-.036-.205-.1042-.2733-.188-.1708-.1537-.2562-.3758-.2562-.5979 0-.222.0854-.4441.2562-.5996.0684-.0837.1708-.152.2733-.1862.3076-.1367.7005-.0513.9226.1862.1708.1555.2562.3775.2562.5996 0 .2221-.0854.4442-.2562.598-.1538.1708-.3759.2562-.598.2562zm0-3.4167c-.222 0-.4441-.0854-.5979-.2562-.0854-.0684-.1537-.1709-.1879-.275-.0512-.1009-.0683-.205-.0683-.323 0-.222.0854-.4441.2562-.5996.0684-.0837.1708-.152.2733-.1862.3246-.1366.6834-.0512.9226.1862.1708.1555.2562.3776.2562.5997 0 .1178-.017.222-.0683.3228-.0342.1042-.1025.2067-.188.275-.0683.0838-.1708.1521-.2733.188-.1025.0512-.205.0683-.3246.0683zm0-3.4166c-.1196 0-.222-.0171-.3246-.0684-.1024-.0358-.205-.1042-.2733-.1879-.1708-.1537-.2562-.3758-.2562-.5979 0-.1042.017-.222.0683-.3246.0342-.1025.1025-.2067.188-.275.222-.2375.615-.3229.9224-.1862.1025.0341.205.1025.2734.1862.0854.0683.1537.1725.1879.275.0512.1025.0683.2204.0683.3246 0 .222-.0854.4442-.2562.598-.1538.1707-.3759.2562-.598.2562zm5.125 6.8333c-.1196 0-.222-.017-.3246-.0683-.1025-.036-.205-.1042-.2733-.188-.0854-.0683-.1537-.1708-.1879-.275-.0512-.1008-.0683-.205-.0683-.3229 0-.222.0854-.4441.2562-.5996.0684-.0837.1709-.152.2734-.1862a.8543.8543 0 01.6491 0c.1025.0342.205.1025.2733.1862.1709.1555.2563.3775.2563.5996 0 .2221-.0854.4442-.2563.598-.0683.0837-.1708.152-.2733.1879-.1025.0512-.205.0683-.3246.0683zm0-3.4167c-.1196 0-.222-.017-.3246-.0683-.1025-.0359-.205-.1042-.2733-.188-.0854-.0683-.1537-.1708-.1879-.275-.0512-.1008-.0683-.205-.0683-.3228 0-.2221.0854-.4442.2562-.5997.3075-.3228.8713-.3228 1.1959 0 .1708.1555.2562.3776.2562.5997 0 .1178-.017.222-.0683.3228-.0342.1042-.1025.2067-.188.275-.1537.171-.3758.2563-.5979.2563zm0-3.4166c-.1196 0-.222-.0171-.3246-.0684-.1025-.0358-.205-.1042-.2733-.1879-.1708-.1537-.2562-.3758-.2562-.5979 0-.222.0854-.4442.2562-.5996.2221-.2375.598-.3229.9225-.1862.1025.0341.205.1025.2733.1862.0855.0683.1538.1725.188.275.0512.1025.0683.2204.0683.3246 0 .222-.0854.4442-.2563.598-.1537.1707-.3758.2562-.5979.2562zm5.125 3.4166c-.1196 0-.222-.017-.3246-.0683-.1025-.0359-.205-.1042-.2733-.188-.0854-.0683-.1537-.1708-.1879-.275-.0512-.1008-.0683-.205-.0683-.3228 0-.2221.0854-.4442.2562-.5997.0684-.0837.1709-.152.2734-.1862.3245-.1366.6833-.0512.9224.1862.1709.1555.2563.3776.2563.5997 0 .1178-.017.222-.0683.3228-.0342.1042-.1025.2067-.188.275-.0683.0838-.1708.1521-.2733.188-.1025.0512-.205.0683-.3246.0683zm0-3.4166c-.1196 0-.222-.0171-.3246-.0684-.1025-.0358-.205-.1042-.2733-.1879-.1708-.1537-.2562-.3758-.2562-.5979 0-.222.0854-.4442.2562-.5996.3075-.3229.8884-.3229 1.1959 0 .1708.1554.2562.3775.2562.5996 0 .222-.0854.4442-.2563.598-.0683.0836-.1708.152-.2733.1878-.1025.0513-.205.0684-.3246.0684z"
                        fill={color || '#2C2E2F'}
                        fill-rule="nonzero"
                    />
                </svg>
            );
        case 'truck':
            return (
                <svg width="35" height="22" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.0417 17.2684c.242-.8691.8191-1.5986 1.5833-2.0406V2.8125a.8542.8542 0 00-.8542-.8542H2.9792a.8542.8542 0 00-.8542.8542v14.5208h.8753a.8542.8542 0 010 1.7084H1.2708a.8542.8542 0 01-.8541-.8542V2.8125C.4167 1.3973 1.5639.25 2.9792.25h18.7916c1.4153 0 2.5625 1.1473 2.5625 2.5625v2.633h5.2789c.9651 0 1.8484.5423 2.2851 1.403l1.8052 3.5654c.5026.7975.7511 1.9009.7511 3.0044v4.7046a.8542.8542 0 01-.8542.8541h-5.941c-.3563 1.5065-1.7096 2.6272-3.325 2.6272-1.6156 0-2.969-1.1209-3.3252-2.6274h-8.725c-.3563 1.5062-1.7098 2.6274-3.3245 2.6274-1.887 0-3.417-1.53-3.417-3.417 0-1.887 1.53-3.4164 3.417-3.4164 1.5683 0 2.89 1.057 3.2913 2.4976h8.7917zm3.2916-2.4976c1.569 0 2.8906 1.057 3.2918 2.4979h5.1202v-3.8504c0-.4166-.0478-.8303-.1418-1.21h-3.7463a.8542.8542 0 110-1.7083h2.9774l-1.4607-2.8785a.8542.8542 0 00-.7617-.4676h-5.2789v7.617zm-13.6666 3.4163c0-.9432-.765-1.708-1.708-1.708-.9437 0-1.7087.7647-1.7087 1.708 0 .9435.7652 1.7087 1.7087 1.7087.9428 0 1.708-.7653 1.708-1.7087zm15.375.0004c0-.9437-.7647-1.7083-1.7084-1.7083-.9437 0-1.7083.7646-1.7083 1.7083s.7646 1.7083 1.7083 1.7083 1.7084-.7646 1.7084-1.7083z"
                        fill={color || '#2C2E2F'}
                        fill-rule="nonzero"
                    />
                </svg>
            );
        case 'tags':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.17 41.6">
                    <path
                        d="M6.88 32.41L19 34.89l.13-.41a.86.86 0 011.08-.55.85.85 0 01.49 1.07l-.37 1.13a.85.85 0 01-1 .57L6.57 34.09A1.92 1.92 0 015 31.91l2.84-18.44A2.5 2.5 0 018.6 12l2.87-2.76a.86.86 0 011.19 1.23l-2.88 2.77a.78.78 0 00-.25.49L6.71 32.16a.22.22 0 00.17.25zM27.66 7.77a.86.86 0 11-.45 1.65l-9.43-2.58a.24.24 0 00-.24.11l-3.09 8.2a1.72 1.72 0 00.06 1l8.35 16.2a.11.11 0 00.14.05l12.41-6.28a.1.1 0 00.05-.13l-6.88-13.31a.85.85 0 111.51-.78L37 25.26a1.8 1.8 0 01-.79 2.43L23.77 34a1.82 1.82 0 01-2.43-.78L13 17a3.3 3.3 0 01-.14-2.43l3.08-8.2a1.94 1.94 0 012.29-1.16zm-4.91 5.12a1.71 1.71 0 10-.75 2.3 1.71 1.71 0 00.75-2.3zm0 3.82a3.42 3.42 0 111.49-4.6 3.41 3.41 0 01-1.46 4.6z"
                        fill={color || '#2C2E2F'}
                    />
                </svg>
            );
        default:
            return null;
    }
};

export default Icon;
