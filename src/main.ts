import * as themes from "./themes";
import * as settings from "./settings";
import * as log from "./log";
import * as usercache from "./usercache";
import * as scoreboard from "./scoreboard";
import * as song_leaderboard from "./song_leaderboard";
import * as compare from "./compare";
import * as ppgraph from "./ppgraph";
import * as user from "./user";

// @ ts-ignore
//timeago = timeago();

log.setup();
themes.setup();
settings.load_last_theme();
usercache.load();
window.addEventListener("DOMContentLoaded", function () {
	scoreboard.setup_dl_link_user_site();
	scoreboard.setup_dl_link_leaderboard();
	user.setup_self_pin_button();
	scoreboard.setup_user_rank_link_swap();
	scoreboard.setup_song_rank_link_swap();
	compare.setup_user_compare();
	user.update_self_button();
	settings.update_button_visibility();
	scoreboard.setup_wide_table_checkbox();
	settings.setup();
	song_leaderboard.setup_song_filter_tabs();
	song_leaderboard.highlight_user();
	//ppgraph.setup_pp_distribution_graph();
});
