export const setProgress = (setLoading: (value: number) => void) => {
    let percent: number = 0;
    let interval: ReturnType<typeof setInterval>;

    // 🔹 Start loading animation
    const start = () => {
        interval = setInterval(() => {
            if (percent <= 50) {
                // fast progress till 50%
                let rand = Math.round(Math.random() * 5);
                percent += rand;
                setLoading(Math.min(percent, 50));
            } else {
                clearInterval(interval);

                // slow progress after 50%
                interval = setInterval(() => {
                    percent += Math.round(Math.random());
                    setLoading(Math.min(percent, 91));

                    if (percent >= 91) {
                        clearInterval(interval);
                    }
                }, 2000);
            }
        }, 100);
    };

    // 🔹 Force complete (100%)
    const complete = () => {
        clearInterval(interval);

        interval = setInterval(() => {
            if (percent < 100) {
                percent++;
                setLoading(percent);
            } else {
                clearInterval(interval);
            }
        }, 10);
    };

    // 🔹 Instantly clear & set 100%
    const clear = () => {
        clearInterval(interval);
        percent = 100;
        setLoading(100);
    };

    return {
        start,
        complete,
        clear,
    };
};