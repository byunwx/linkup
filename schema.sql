CREATE DATABASE linkstagram_DB;
USE linkstagram_DB;



DROP EVENT IF EXISTS e_click;
CREATE EVENT e_click
  ON SCHEDULE
    EVERY 1 MINUTE
    STARTS (TIMESTAMP(CURRENT_DATE) + INTERVAL 1 DAY + INTERVAL 1 HOUR)
    COMMENT 'RESET CLICK COUNT FOR DAILY'
  DO
    UPDATE linkstagram_DB.Links SET dailyClicks=0 WHERE id = *;


-- CREATE EVENT e_min
--     ON SCHEDULE
--       EVERY 1 DAY
--     COMMENT 'Clears out sessions table each MIN.'
--     DO
--     INSERT INTO linkstagram_DB.Link (*, dailyClicks
-- )
--         SELECT CURRENT_TIMESTAMP, COUNT(*)
--           FROM site_activity.sessions;
--       DELETE FROM site_activity.sessions;
--     END |
--
-- delimiter ;

DROP EVENT IF EXISTS e_click;
CREATE EVENT e_click
  ON SCHEDULE
    EVERY 1 MINUTE
    STARTS (TIMESTAMP(CURRENT_DATE) + INTERVAL 1 DAY + INTERVAL 1 HOUR)
    COMMENT 'RESET CLICK COUNT FOR DAILY'
  DO
    UPDATE Links SET dailyClicks=0;
