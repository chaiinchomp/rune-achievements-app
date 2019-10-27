import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function() {
    return (
        <div
            style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "20px"
            }}
            className="content"
        >
            <Jumbotron className="bg-dark text-white">
                <h1>RuneAchievements</h1>
                <p>
                    This site is intended to solve what I see as a problem with
                    Old School Runescape, that being the lack of a true
                    achievement system.
                </p>
                <p>
                    We have achievement diaries, but these are small and short,
                    and the tasks within them are arbitrary and don't represent
                    a comprehensive list of all the completeable tasks within
                    the world of Gielinor.
                </p>
                <p>
                    The collection log comes closer, but since it only tracks
                    drops, it's still missing a lot of other completable
                    content, like unlockables, quests, music tracks, and more.
                </p>
                <p>
                    So, this webapp is intended to bridge that gap. Inspired by
                    the work of other creators, such as Tedious's collection log
                    series, the Totus clan's comprehensive completionist
                    spreadsheets, and various drop tracking websites like
                    <Link href="https://osdrops.com/">&nbsp;OSDrops&nbsp;</Link>
                    and
                    <Link href="http://www.progrs.org/">&nbsp;ProgRS</Link>, and
                    with a UI heavily inspired by World of Warcraft's
                    achievement log, my goal is to bring together all of these
                    disparate sources of tracking to provide a single place to
                    check off tasks and satisfy all of your completionist
                    tendencies.
                </p>
            </Jumbotron>
            <Jumbotron className="bg-dark text-white">
                <h1>Roadmap</h1>
                <p>
                    Planned functionality:
                    <ul>
                        <li>
                            Categorized database of completeable tasks in OSRS,
                            including collection log items, character unlocks,
                            music tracks, quests, one-off completables, skill
                            milestones, and more.
                        </li>
                        <li>
                            Shareable links to show off your character's
                            completion status.
                        </li>
                        <li>
                            Import/export functionality to save and backup your
                            achievement data.
                        </li>
                        <li>
                            Task randomizer to choose a goal for you when you
                            aren't sure what you feel like going for next.
                        </li>
                        <li>
                            Import your character's skills from Highscores to
                            filter tasks by whether you have the skill
                            requirements to complete them.
                        </li>
                        <li>
                            Custom Runelite plugin to automatically update your
                            achievement log and show a congratulatory pop-up
                            whenever you complete a task.
                        </li>
                    </ul>
                </p>
            </Jumbotron>
            <Jumbotron className="bg-dark text-white">
                <h1>About the Developer</h1>
                <p>
                    RuneAchievements is handcrafted by
                    <i>&nbsp;chaiinchomp</i>. I keep my private chat on so say
                    hi if you see me ingame!
                </p>
                <p>
                    You can also find the code on my Github:
                    <Link href="https://github.com/chaiinchomp/rune-achievements-app">
                        &nbsp;rune-achievements-app (frontend)&nbsp;
                    </Link>
                    and
                    <Link href="https://github.com/chaiinchomp/RuneAchievements">
                        &nbsp;RuneAchievements (backend)
                    </Link>
                    .
                </p>
            </Jumbotron>
            <br />
        </div>
    );
}
