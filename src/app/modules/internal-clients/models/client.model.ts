export interface Client {
  cell?: string;
  dob?: {
    age?: string;
    date?: string;
  };

  email?: string;
  gender?: string;
  id: {
    value: string;
    name?: string;
  };
  location?: {
    city?: string;
    coordinates?: {
      latitude?: string;
      longitude?: string;
    };
    country?: string;
    postcode?: string;
    state?: string;
    street?: {
      number?: string;
      name?: string;
    };
    timezone?: {
      description?: string;
      offset?: string;
    };
  };
  login?: {
    md5?: string;
    password?: string;
    salt?: string;
    sha1?: string;
    sha256?: string;
    username?: string;
    uuid?: string;
  };
  name: {
    first?: string;
    last?: string;
    title?: string;
  };
  nat?: string;
  phone?: string;
  picture?: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  registered?: {
    age?: string;
    date?: string;
  };
}
