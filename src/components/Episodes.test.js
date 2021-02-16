import React from "react";
import Episodes from "./Episodes";
import { render } from "@testing-library/react";

const season1 = [
  {
    airdate: "2016-07-15",
    airstamp: "2016-07-15T12:00:00+00:00",
    airtime: "",
    id: 553946,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
    },
    name: "Chapter One: The Vanishing of Will Byers",
    number: 1,
    runtime: 60,
    season: 1,
    summary:
      "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
    type: "regular",
    url:
      "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
  },
  {
    airdate: "2016-07-15",
    airstamp: "2016-07-15T12:00:00+00:00",
    airtime: "",
    id: 578663,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg",
    },
    name: "Chapter Two: The Weirdo on Maple Street",
    number: 2,
    runtime: 60,
    season: 1,
    summary:
      "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
    type: "regular",
    url:
      "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
  },
];

const season2 = [
  {
    airdate: "2017-10-27",
    airstamp: "2017-10-27T12:00:00+00:00",
    airtime: "",
    id: 909340,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/132/331976.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/132/331976.jpg",
    },
    name: "Chapter One: MADMAX",
    number: 1,
    runtime: 60,
    season: 2,
    summary:
      "<p>One year after the events with the Upside Down and the Demogorgon, Will meets with a government doctor. The boys discover that there's a new player in town, and Jim pays a visit to El.</p>",
    type: "regular",
    url:
      "http://www.tvmaze.com/episodes/909340/stranger-things-2x01-chapter-one-madmax",
  },
  {
    airdate: "2017-10-27",
    airstamp: "2017-10-27T12:00:00+00:00",
    airtime: "",
    id: 909342,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/132/332034.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/132/332034.jpg",
    },
    name: "Chapter Two: Trick or Treat, Freak",
    number: 2,
    runtime: 60,
    season: 2,
    summary:
      "<p>The boys go trick-or-treating on Halloween, and Will has another vision. Meanwhile, El relieves the days following her escape from the Upside Down, and Dustin finds something in the garbage can.</p>",
    type: "regular",
    url:
      "http://www.tvmaze.com/episodes/909342/stranger-things-2x02-chapter-two-trick-or-treat-freak",
  },
];
test("renders episodes without errors", () => {
  const { getAllByTestId } = render(<Episodes episodes={[]} />);

  expect(getAllByTestId("episodes")).not.toBeInTheDocument();
});

test("render episodes when different season is selected", () => {
  const { rerender, getAllByTestId } = render(<Episodes episodes={season1} />);

  expect(getAllByTestId("episode")).toHaveLength(season1.length);

  rerender(<Episodes episodes={season2} />);

  expect(getAllByTestId("episode")).toHaveLength(season2.length);
});
