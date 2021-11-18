import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function Filters({ platform, setPlatform, category, setCategory, sort, setSort }) {

    const handleChangePlatform = (event) => {
        setPlatform(event.target.value);
    };
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };
    const handleChangeSory = (event) => {
        setSort(event.target.value);
    };

    return (
        <main>
            <Grid container direction='row' justifyContent='flex-end' alignItems='center' spacing={4} >
                <Grid item xs={12} md={4} lg={2}>
                    <FormControl fullWidth >
                        <InputLabel id="platform">Platform</InputLabel>
                        <Select
                            MenuProps={{
                                getContentAnchorEl: null,
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left",
                                }
                            }}
                            labelId="platform"
                            id="platform-id"
                            value={platform}
                            label="platform"
                            onChange={handleChangePlatform}
                        >
                            <MenuItem value={'pc'}>PC</MenuItem>
                            <MenuItem value={'browser'}>Browser</MenuItem>
                            <MenuItem value={'all'}>All</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4} lg={2}>
                    <FormControl fullWidth>
                        <InputLabel id="category">Category</InputLabel>
                        <Select
                            MenuProps={{
                                getContentAnchorEl: null,
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left",
                                }
                            }}
                            labelId="category"
                            id="category"
                            value={category}
                            label="category"
                            onChange={handleChangeCategory}
                        >
                            <MenuItem value={'mmorpg'}>mmorpg</MenuItem>
                            <MenuItem value={'shooter'}>shooter</MenuItem>
                            <MenuItem value={'strategy'}>strategy</MenuItem>
                            <MenuItem value={'action'}>action</MenuItem>
                            <MenuItem value={'racing'}>racing</MenuItem>
                            <MenuItem value={'sports'}>sports</MenuItem>
                            <MenuItem value={'mmo'}>mmo</MenuItem>
                            <MenuItem value={'survival'}>survival</MenuItem>
                            <MenuItem value={'social'}>social</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4} lg={2}>
                    <FormControl fullWidth>
                        <InputLabel id="sort-by">Sort by</InputLabel>
                        <Select
                            MenuProps={{
                                getContentAnchorEl: null,
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left",
                                }
                            }}
                            labelId="dsort-by"
                            id="sort-by"
                            value={sort}
                            label="sort by"
                            onChange={handleChangeSory}
                        >
                            <MenuItem value={'release-date'}>release date</MenuItem>
                            <MenuItem value={'popularity'}>popularity</MenuItem>
                            <MenuItem value={'alphabetical'}>alphabetical</MenuItem>
                            <MenuItem value={'relevance'}>relevance</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </main>
    );
}
