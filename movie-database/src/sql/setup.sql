CREATE TABLE IF NOT EXISTS Directors (
    DirectorID SERIAL PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Nationality VARCHAR(50),
    DOB DATE
);

CREATE TABLE IF NOT EXISTS Actors (
    ActorID SERIAL PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Nationality VARCHAR(50),
    DOB DATE
);

CREATE TABLE IF NOT EXISTS Genres (
    GenreID SERIAL PRIMARY KEY,
    GenreName VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS Movies (
    MovieID SERIAL PRIMARY KEY,
    Title VARCHAR(150) NOT NULL,
    ReleaseYear INT NOT NULL,
    DirectorID INT,
    FOREIGN KEY (DirectorID) REFERENCES Directors(DirectorID) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS Ratings (
    MovieID INT,
    Rating DECIMAL(3, 2) CHECK (Rating >= 0 AND Rating <= 10),
    FOREIGN KEY (MovieID) REFERENCES Movies(MovieID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS MovieGenres (
    MovieID INT,
    GenreID INT,
    PRIMARY KEY (MovieID, GenreID),
    FOREIGN KEY (MovieID) REFERENCES Movies(MovieID) ON DELETE CASCADE,
    FOREIGN KEY (GenreID) REFERENCES Genres(GenreID) ON DELETE CASCADE
);