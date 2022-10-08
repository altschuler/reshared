CREATE TABLE transfer_request_status (
  value text PRIMARY KEY,
  comment text
);

INSERT INTO transfer_request_status (value, comment) VALUES
  ('pending', 'pending status'),
  ('accepted', 'accepted status'),
  ('rejected', 'rejected status'),
  ('cancelled', 'cancelled status');
