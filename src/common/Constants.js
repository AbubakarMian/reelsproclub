const base_url = 'http://localhost/reels_proclub_backend/public/api';   
// const base_url = 'https://stagging.hatinco.com/reels_proclub_backend/public/api';

export const Constant = {
  basic_token: "Basic cmVlbHNwcm8tYXBwLW1vYmlsZTogY21WbGJITndjbTh0WVhCd0xXMXZZbWxzWlE9PQ==",
  google_api_key:"AIzaSyAo9XGd-Ss75Cnfqqu41SdDvlwRu1WYKB0",
  // google_api_key:"https://maps.googleapis.com/maps/api/geocode/json?latlng=24.9551014,67.0583857&sensor=true&key=AIzaSyAo9XGd-Ss75Cnfqqu41SdDvlwRu1WYKB0",
  signup: `${base_url}/register`,
  login: `${base_url}/login`,
  forget_email: `${base_url}/forget_email`,
  video_upload: `${base_url}/video_upload`,
  get_category: `${base_url}/get_cat`,
  get_people: `${base_url}/get_people`,
  get_category_people: `${base_url}/get_category_people`,
  get_reel_rate: `${base_url}/get_reel_rate`,
  submit_payment: `${base_url}/submit_payment`,
  // get_orders_list for  influencer 
  get_orders_list: `${base_url}/get_orders_list`,
  get_orders_reels: `${base_url}/get_orders_reels`,
  delete_reel: `${base_url}/delete_reel`,
  deliver_reels: `${base_url}/deliver_reels`,
  // for user
  get_order_reviews: `${base_url}/get_order_reviews`,
  get_order_reels_user: `${base_url}/get_order_reels_user`,
  reels_accepetd: `${base_url}/reels_accepetd`,
  orders_available: `${base_url}/orders_available`,
  get_profile: `${base_url}/get_profile`,
  user_update_profile: `${base_url}/user_update_profile`,
  upload_image: `${base_url}/upload_image`,

  
};      