import { type HttpResponse, HttpStatus } from '../protocols/http';

export const mockGeoapifyLocationsResponse = (): any => ({
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'properties': {
        'datasource': {
          'sourcename': 'openstreetmap',
          'attribution': '© OpenStreetMap contributors',
          'license': 'Open Database License',
          'url': 'https://www.openstreetmap.org/copyright'
        },
        'country': 'Brasil',
        'country_code': 'br',
        'region': 'Região Sul',
        'state': 'Rio Grande do Sul',
        'state_district': 'Região Geográfica Intermediária de Porto Alegre',
        'county': 'Região Metropolitana de Porto Alegre',
        'city': 'Porto Alegre',
        'municipality': 'Região Geográfica Imediata de Porto Alegre',
        'lon': -51.2303767,
        'lat': -30.0324999,
        'state_code': 'RS',
        'formatted': 'Porto Alegre, Região Metropolitana de Porto Alegre, Brasil',
        'address_line1': 'Porto Alegre',
        'address_line2': 'Região Metropolitana de Porto Alegre, Brasil',
        'category': 'administrative',
        'timezone': {
          'name': 'America/Sao_Paulo',
          'offset_STD': '-03:00',
          'offset_STD_seconds': -10800,
          'offset_DST': '-03:00',
          'offset_DST_seconds': -10800
        },
        'result_type': 'city',
        'rank': {
          'importance': 0.633208007806445,
          'confidence': 1,
          'confidence_city_level': 1,
          'match_type': 'full_match'
        },
        'place_id': '515521d4fb7c9d49c0598f9fd7e951083ec0f00101f901ddb2030000000000c00208'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -51.2303767,
          -30.0324999
        ]
      },
      'bbox': [
        -51.3034404,
        -30.2694499,
        -51.0188522,
        -29.9324744
      ]
    },
    {
      'type': 'Feature',
      'properties': {
        'datasource': {
          'sourcename': 'openstreetmap',
          'attribution': '© OpenStreetMap contributors',
          'license': 'Open Database License',
          'url': 'https://www.openstreetmap.org/copyright'
        },
        'country': 'Brasil',
        'country_code': 'br',
        'region': 'Região Norte',
        'state': 'Rondônia',
        'county': 'Região Geográfica Intermediária de Porto Velho',
        'city': 'Porto Velho',
        'municipality': 'Região Geográfica Imediata de Porto Velho',
        'lon': -63.8735438,
        'lat': -8.7494525,
        'state_code': 'RO',
        'formatted': 'Porto Velho, Região Geográfica Intermediária de Porto Velho, Brasil',
        'address_line1': 'Porto Velho',
        'address_line2': 'Região Geográfica Intermediária de Porto Velho, Brasil',
        'category': 'administrative',
        'timezone': {
          'name': 'America/Porto_Velho',
          'offset_STD': '-04:00',
          'offset_STD_seconds': -14400,
          'offset_DST': '-04:00',
          'offset_DST_seconds': -14400
        },
        'result_type': 'city',
        'rank': {
          'importance': 0.4599142113711118,
          'confidence': 1,
          'confidence_city_level': 1,
          'match_type': 'full_match'
        },
        'place_id': '51d14f8248d0ef4fc05996cff23cb87f21c0f00101f901dff8040000000000c00208'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -63.8735438,
          -8.7494525
        ]
      },
      'bbox': [
        -66.8058676,
        -10,
        -62.237,
        -7.9692942
      ]
    },
    {
      'type': 'Feature',
      'properties': {
        'datasource': {
          'sourcename': 'openstreetmap',
          'attribution': '© OpenStreetMap contributors',
          'license': 'Open Database License',
          'url': 'https://www.openstreetmap.org/copyright'
        },
        'country': 'Brasil',
        'country_code': 'br',
        'region': 'Região Nordeste',
        'state': 'Bahia',
        'county': 'Região Geográfica Intermediária de Ilhéus-Itabuna',
        'city': 'Porto Seguro',
        'municipality': 'Região Geográfica Imediata de Eunápolis - Porto Seguro',
        'lon': -39.064251,
        'lat': -16.443473,
        'state_code': 'BA',
        'formatted': 'Porto Seguro, Região Geográfica Intermediária de Ilhéus-Itabuna, Brasil',
        'address_line1': 'Porto Seguro',
        'address_line2': 'Região Geográfica Intermediária de Ilhéus-Itabuna, Brasil',
        'category': 'administrative',
        'timezone': {
          'name': 'America/Bahia',
          'offset_STD': '-03:00',
          'offset_STD_seconds': -10800,
          'offset_DST': '-03:00',
          'offset_DST_seconds': -10800
        },
        'result_type': 'city',
        'rank': {
          'importance': 0.5131235182618819,
          'confidence': 1,
          'confidence_city_level': 1,
          'match_type': 'full_match'
        },
        'place_id': '511ede7360398843c059b5a84f72877130c0f00101f9016587050000000000c00208'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -39.064251,
          -16.443473
        ]
      },
      'bbox': [
        -39.576,
        -16.929,
        -39.0073781,
        -16.3431345
      ]
    },
    {
      'type': 'Feature',
      'properties': {
        'datasource': {
          'sourcename': 'openstreetmap',
          'attribution': '© OpenStreetMap contributors',
          'license': 'Open Database License',
          'url': 'https://www.openstreetmap.org/copyright'
        },
        'country': 'Brasil',
        'country_code': 'br',
        'region': 'Região Sudeste',
        'state': 'Minas Gerais',
        'county': 'Região Geográfica Intermediária de Juiz de Fora',
        'city': 'Porto Firme',
        'municipality': 'Região Geográfica Imediata de Viçosa',
        'lon': -43.084444,
        'lat': -20.672778,
        'state_code': 'MG',
        'formatted': 'Porto Firme, Região Geográfica Intermediária de Juiz de Fora, Brasil',
        'address_line1': 'Porto Firme',
        'address_line2': 'Região Geográfica Intermediária de Juiz de Fora, Brasil',
        'category': 'administrative',
        'timezone': {
          'name': 'America/Sao_Paulo',
          'offset_STD': '-03:00',
          'offset_STD_seconds': -10800,
          'offset_DST': '-03:00',
          'offset_DST_seconds': -10800
        },
        'result_type': 'city',
        'rank': {
          'importance': 0.5012744154686481,
          'confidence': 1,
          'confidence_city_level': 1,
          'match_type': 'full_match'
        },
        'place_id': '51f52b9d0fcf8a45c059e277d32d3bac34c0f00101f90116d0040000000000c00208'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -43.084444,
          -20.672778
        ]
      },
      'bbox': [
        -43.186,
        -20.771,
        -42.965,
        -20.562
      ]
    },
    {
      'type': 'Feature',
      'properties': {
        'datasource': {
          'sourcename': 'openstreetmap',
          'attribution': '© OpenStreetMap contributors',
          'license': 'Open Database License',
          'url': 'https://www.openstreetmap.org/copyright'
        },
        'country': 'Brasil',
        'country_code': 'br',
        'region': 'Região Sudeste',
        'state': 'São Paulo',
        'county': 'Região Geográfica Intermediária de Araraquara',
        'city': 'Porto Ferreira',
        'municipality': 'Região Imediata de São Carlos',
        'lon': -47.4794943,
        'lat': -21.8529134,
        'state_code': 'SP',
        'formatted': 'Porto Ferreira, Região Geográfica Intermediária de Araraquara, Brasil',
        'address_line1': 'Porto Ferreira',
        'address_line2': 'Região Geográfica Intermediária de Araraquara, Brasil',
        'category': 'administrative',
        'timezone': {
          'name': 'America/Sao_Paulo',
          'offset_STD': '-03:00',
          'offset_STD_seconds': -10800,
          'offset_DST': '-03:00',
          'offset_DST_seconds': -10800
        },
        'result_type': 'city',
        'rank': {
          'importance': 0.48472674131945287,
          'confidence': 1,
          'confidence_city_level': 1,
          'match_type': 'full_match'
        },
        'place_id': '51288fb81160bd47c059f651578858da35c0f00101f901c28c040000000000c00208'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [
          -47.4794943,
          -21.8529134
        ]
      },
      'bbox': [
        -47.5535925,
        -21.9353185,
        -47.3344016,
        -21.755
      ]
    }
  ],
  'query': {
    'text': 'porto',
    'parsed': {
      'county': 'porto',
      'expected_type': 'unknown'
    }
  }
});

export const mockHttpClientGeoapifyLocationsResponse = (): HttpResponse => ({
  statusCode: HttpStatus.ok,
  body: mockGeoapifyLocationsResponse()
});