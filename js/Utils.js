function Region(xmin, xmax, zmin, zmax) {
    if (x > xmin && xmax > x && z > zmin && zmax > z) {
        return true;
    } else {
        return false;
    }
}