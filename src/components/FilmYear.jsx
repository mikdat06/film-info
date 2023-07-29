function FilmYear({ data, filmIndex, setFilmIndex }) {
  return (
    <div className="col-12 col-lg-1">
      <div className="nav nav-pills d-flex align-items-start">
        {data.map((item, i) => {
          return (
            <button
              className={`border-0 px-2 m-2 fs-4 fw-bold rounded-3 ${
                i === filmIndex && "activeBtn"
              }`}
              key={i}
              id="v-pills-home-tab"
              type="button"
              role="tab"
              onClick={() => setFilmIndex(i)}
            >
              {item.date}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilmYear;
