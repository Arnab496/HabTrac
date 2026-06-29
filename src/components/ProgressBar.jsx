function ProgressBar({ completed, total }) {

    const percent =
        total === 0
            ? 0
            : Math.round((completed / total) * 100);

    return (

        <div>

            <h3>Today's Progress ({percent}%)</h3>

            <div className="progress">

                <div
                    className="progress-fill"
                    style={{ width: `${percent}%` }}
                ></div>

            </div>

        </div>

    );

}

export default ProgressBar;