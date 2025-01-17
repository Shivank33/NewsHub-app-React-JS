import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, url, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://t3.ftcdn.net/jpg/01/26/39/54/360_F_126395469_FnlY3ZgaAZaosjmSbkgA3I5sS3UXN78T.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-danger">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toUTCString()}{" "}
              </small>
            </p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
