export function currentStreak(history) {

    let streak = 0;

    let today = new Date();

    while (true) {

        let key = today.toISOString().split("T")[0];

        if (history[key]) {

            streak++;

            today.setDate(today.getDate() - 1);

        }

        else {

            break;

        }

    }

    return streak;

}

export function longestStreak(history) {

    let longest = 0;

    let current = 0;

    const dates = Object.keys(history).sort();

    for (let d of dates) {

        if (history[d]) {

            current++;

            longest = Math.max(longest, current);

        }

        else {

            current = 0;

        }

    }

    return longest;

}