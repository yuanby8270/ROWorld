// ** 1. Tailwind Configuration (必須放在最前面，讓 CDN 讀取擴展設置) **
tailwind.config = {
    theme: {
        extend: {
            colors: { 
                ro: { 
                    primary: '#4380D3',
                    bg: '#e0f2fe',
                }
            },
            fontFamily: {
                'cute': ['"ZCOOL KuaiLe"', '"Varela Round"', 'sans-serif']
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'jelly': 'jelly 2s infinite',
                'cloud-move': 'cloudMove 60s linear infinite',
                'poring-jump': 'poringJump 1s infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                jelly: {
                    '0%, 100%': { transform: 'scale(1, 1)' },
                    '25%': { transform: 'scale(0.9, 1.1)' },
                    '50%': { transform: 'scale(1.1, 0.9)' },
                    '75%': { transform: 'scale(0.95, 1.05)' },
                },
                cloudMove: {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                poringJump: {
                    '0%': { transform: 'translateY(0) scale(1.1, 0.9)' },
                    '100%': { transform: 'translateY(-20px) scale(0.9, 1.1)' }
                }
            }
        }
    }
}


// ** 2. 常量與初始數據 **
const DATA_VERSION = "6.0";
const JOB_STYLES = [
    { key: ['騎士'], class: 'bg-job-knight', icon: 'fa-shield-alt' }, { key: ['十字軍'], class: 'bg-job-crusader', icon: 'fa-cross' }, { key: ['鐵匠', '商人'], class: 'bg-job-blacksmith', icon: 'fa-hammer' },
    { key: ['獵人', '弓箭手'], class: 'bg-job-hunter', icon: 'fa-crosshairs' }, { key: ['詩人'], class: 'bg-job-bard', icon: 'fa-music' }, { key: ['煉金'], class: 'bg-job-alchemist', icon: 'fa-flask' },
    { key: ['神官', '服事', '牧師'], class: 'bg-job-priest', icon: 'fa-plus' }, { key: ['武僧'], class: 'bg-job-monk', icon: 'fa-fist-raised' }, { key: ['巫師', '法師'], class: 'bg-job-wizard', icon: 'fa-hat-wizard' },
    { key: ['賢者'], class: 'bg-job-sage', icon: 'fa-book' }, { key: ['槍手'], class: 'bg-job-gunslinger', icon: 'fa-bullseye' }, { key: ['舞孃'], class: 'bg-job-dancer', icon: 'fa-star' },
    { key: ['刺客', '盜賊'], class: 'bg-job-assassin', icon: 'fa-skull' }, { key: ['流氓'], class: 'bg-job-rogue', icon: 'fa-mask' }
];

const JOB_STRUCTURE = {
    "騎士": ["龍", "敏爆", "其他"], "十字軍": ["坦", "輸出", "其他"], "鐵匠": ["戰鐵", "鍛造", "其他"], "煉金": ["一般", "其他"],
    "獵人": ["鳥", "