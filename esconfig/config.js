/*
* (C) Copyright 2017 o2r project
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

const mapping = {
    "compendia": {
        "properties": {
            "metadata": {
                "properties": {
                    "o2r": {
                        "properties": {
                            "spatial": {
                                "properties": {
                                    "union": {
                                        "properties": {
                                            "geojson": {
                                                "properties": {
                                                    "geometry": {
                                                        "type": "geo_shape",
                                                        "tree": "quadtree"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "identifier": {
                                "properties": {
                                    "content": {
                                        "type": "string",
                                        "analyzer": "doi_analyzer"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

const settings = {
    "settings": {
        "analysis": {
            "analyzer": {
                "o2r_analyzer": {
                    "type": "custom",
                    "filter": [
                        "lowercase"
                    ],
                    "tokenizer": "whitespace"
                }
            }
        }
    }
};

module.exports = {
    mapping: mapping,
    settings: settings
};