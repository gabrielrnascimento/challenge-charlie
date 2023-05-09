import { type HttpResponse, HttpStatus } from '../protocols/http';

export const mockOpenCageResponse = {
  'documentation': 'https://opencagedata.com/api',
  'licenses': [
    {
      'name': 'see attribution guide',
      'url': 'https://opencagedata.com/credits'
    }
  ],
  'rate': {
    'limit': 2500,
    'remaining': 2495,
    'reset': 1683331200
  },
  'results': [
    {
      'annotations': {
        'DMS': {
          'lat': "47° 36' 14.00544'' N",
          'lng': "122° 19' 48.35496'' W"
        },
        'FIPS': {
          'county': '53033',
          'state': '53'
        },
        'MGRS': '10TET5035272493',
        'Maidenhead': 'CN87uo04jw',
        'Mercator': {
          'x': -13617724.29,
          'y': 6009636.754
        },
        'OSM': {
          'edit_url': 'https://www.openstreetmap.org/edit?way=111557287#map=17/47.60389/-122.33010',
          'note_url': 'https://www.openstreetmap.org/note/new#map=17/47.60389/-122.33010&layers=N',
          'url': 'https://www.openstreetmap.org/?mlat=47.60389&mlon=-122.33010#map=17/47.60389/-122.33010'
        },
        'UN_M49': {
          'regions': {
            'AMERICAS': '019',
            'NORTHERN_AMERICA': '021',
            'US': '840',
            'WORLD': '001'
          },
          'statistical_groupings': [
            'MEDC'
          ]
        },
        'callingcode': 1,
        'currency': {
          'alternate_symbols': [
            'US$'
          ],
          'decimal_mark': '.',
          'disambiguate_symbol': 'US$',
          'html_entity': '$',
          'iso_code': 'USD',
          'iso_numeric': '840',
          'name': 'United States Dollar',
          'smallest_denomination': 1,
          'subunit': 'Cent',
          'subunit_to_unit': 100,
          'symbol': '$',
          'symbol_first': 1,
          'thousands_separator': ','
        },
        'flag': '🇺🇸',
        'geohash': 'c23nb61by075mbmntpcs',
        'qibla': 17.57,
        'roadinfo': {
          'drive_on': 'right',
          'road': '4th Avenue',
          'speed_in': 'mph'
        },
        'sun': {
          'rise': {
            'apparent': 1683290820,
            'astronomical': 1683282960,
            'civil': 1683288720,
            'nautical': 1683286020
          },
          'set': {
            'apparent': 1683257160,
            'astronomical': 1683265080,
            'civil': 1683259260,
            'nautical': 1683261960
          }
        },
        'timezone': {
          'name': 'America/Los_Angeles',
          'now_in_dst': 1,
          'offset_sec': -25200,
          'offset_string': '-0700',
          'short_name': 'PDT'
        },
        'what3words': {
          'words': 'wonderfully.jumped.string'
        },
        'wikidata': 'Q2262435'
      },
      'bounds': {
        'northeast': {
          'lat': 47.6042875,
          'lng': -122.3293775
        },
        'southwest': {
          'lat': 47.6034073,
          'lng': -122.3307209
        }
      },
      'components': {
        'ISO_3166-1_alpha-2': 'US',
        'ISO_3166-1_alpha-3': 'USA',
        'ISO_3166-2': [
          'US-WA'
        ],
        '_category': 'government',
        '_type': 'townhall',
        'city': 'Seattle',
        'continent': 'North America',
        'country': 'United States',
        'country_code': 'us',
        'county': 'King County',
        'house_number': '600',
        'neighbourhood': 'West Edge',
        'postcode': '98104',
        'road': '4th Avenue',
        'state': 'Washington',
        'state_code': 'WA',
        'suburb': 'International District/Chinatown',
        'townhall': 'Seattle City Hall'
      },
      'confidence': 9,
      'formatted': 'Seattle City Hall, 600 4th Avenue, Seattle, WA 98104, United States of America',
      'geometry': {
        'lat': 47.6038904,
        'lng': -122.3300986
      }
    }
  ],
  'status': {
    'code': 200,
    'message': 'OK'
  },
  'stay_informed': {
    'blog': 'https://blog.opencagedata.com',
    'mastodon': 'https://en.osm.town/@opencage',
    'twitter': 'https://twitter.com/OpenCage'
  },
  'thanks': 'For using an OpenCage API',
  'timestamp': {
    'created_http': 'Fri, 05 May 2023 02:01:40 GMT',
    'created_unix': 1683252100
  },
  'total_results': 1
};

export const mockHttpClientOpenCageResponse = (): HttpResponse => ({
  statusCode: HttpStatus.ok,
  body: mockOpenCageResponse
});