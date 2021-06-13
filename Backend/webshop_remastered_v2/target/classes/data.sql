SELECT * FROM USERS WHERE user_id == 'my_user_one';

INSERT INTO USERS (user_id, user_name, user_email, insertion_date) VALUES ('test_user', 'heast ds is a chef', 'test_mail@gmail.com',TIMESTAMP);

SELECT user_name, user_email FROM USERS WHERE user_id == 'test_user';

DELETE * FROM USERS;